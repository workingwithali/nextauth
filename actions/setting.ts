"use server"
import * as z from "zod";
import { settingSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { CurrentUser } from "@/lib/auth";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";
import bcrypt from "bcryptjs";


export const Setting = async (value: z.infer<typeof settingSchema>) => {
    const user = await CurrentUser();
    if (!user) {
        return { error: "unauthorized" };
    }
    const dbUser = await getUserById(user.id);
    if (!dbUser) {
        return { error: "unauthorized" };
    }
    if (user.isOAuth) {
        value.email = undefined;
        value.password = undefined;
        value.newPassword = undefined;
        value.isTwoFactorEnable = undefined;
    };
    if (value.email && value.email !== user.email) {
        const existingUser = await getUserByEmail(value.email);
        if (existingUser && existingUser.id !== user.id) {
            return { error: "Email is already in use!" };
        }
        const verificationToken = await generateVerificationToken(value.email);
        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token
        );
        return { success: "verification email sent" };
    }
    if(value.password && value.newPassword && dbUser.password) {
        const passwordMatch = await bcrypt.compare(value.password, dbUser.password);
        if (!passwordMatch) {
            return { error: "Incorrect password" };
        }
        const hashedPassword = await bcrypt.hash(value.newPassword, 10);
        value.password = hashedPassword;
        value.newPassword = undefined;
        
    }

    await db.user.update({
        where: { id: user.id },
        data: {
            ...value,
        },
    });
    return { success: "setting updated" };

}
