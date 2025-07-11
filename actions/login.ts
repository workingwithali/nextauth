"use server"
import * as z from "zod"
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { getUserByEmail  } from "@/data/user";
import { generateVerificationToken, generateTwoFactorToken } from "@/lib/token";
import { sendVerificationEmail, sendTwoFactorEmail } from "@/lib/mail";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { db } from "@/lib/db";
import { getTwoFactorconfirmationByUserId } from "@/data/two-factor-confirmation";

export const login = async (value: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(value);
    if (!validatedFields.success) {
        return { error: "Invalid field" };
    }
    const { email, password, code } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if (!existingUser || !existingUser.password) return { error: "Invalid credentials!" };

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(email);
        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token,
        );
        return { success: "comfimation email sent!" };
    }
    if (existingUser.isTwoFactorEnable && existingUser.email) {
        if (code) {
            const twoFactorToken = await getTwoFactorTokenByEmail(email);
            if (!twoFactorToken || twoFactorToken.token !== code) {
                return { error: "Invalid two-factor token!" };
            }
            const hasExpired = new Date(twoFactorToken.expires) < new Date();
            if (hasExpired) {
                return { error: "Two-factor token has expired!" };
            }
            await db.twoFactorToken.delete({
                where: { id: twoFactorToken.id },
            });
            const existingConfirmation = await getTwoFactorconfirmationByUserId(existingUser.id);
            if (existingConfirmation) {
                await db.twoFactorConfirmation.delete({
                    where: {
                        id: existingConfirmation.id,
                    },
                });
            }
            await db.twoFactorConfirmation.create({
                data: {
                    userId: existingUser.id,
                },
            });


        } else {
            const twoFactorToken = await generateTwoFactorToken(email);
            await sendTwoFactorEmail(
                twoFactorToken.email,
                twoFactorToken.token,
            );
            return { TwoFactor: true };
        }
    }


    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })

    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" };
                default:
                    return { error: "something went wrong!" };

            }
        }
        throw error;

    }
}