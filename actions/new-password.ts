"use server";
import * as z from "zod";
import { NewPasswordSchema } from "@/schemas";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const NewPassword = async (
    values: z.infer<typeof NewPasswordSchema>,
    token: string | null,
) => {
    if (!token) {
        return { error: "Missing token" };
    }
    const validatedFields = NewPasswordSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid field" };
    }

    const { password } = validatedFields.data;

    const existingToken = await getPasswordResetTokenByToken(token);
    if (!existingToken) {
        return { error: "Invalid token" };
    }
    const hasexpired = new Date(existingToken.expires) < new Date();
    if (hasexpired) {
        return { error: "Token has expired!" };
    }
    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) {
        return { error: "User not found" };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.update({
        where: { id: existingUser.id },
        data: { password: hashedPassword },
    });
    await db.passwordResetToken.delete({
        where: { id: existingToken.id },
    });
    return { success: "Password reset successfully" };


}