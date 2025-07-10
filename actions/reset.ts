"use server";
import * as z from "zod";
import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/token";

export const Reset = async (values: z.infer<typeof ResetSchema>) => {
    const ValidatedFields = ResetSchema.safeParse(values);
    if (!ValidatedFields.success) {
        return { error: "Invalid field" };
    }
    const { email } = ValidatedFields.data;

    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
        return { error: "User not found" };
    }
    const existingToken = await generatePasswordResetToken(email);
    if (!existingToken) {
        return { error: "Failed to generate reset token" };
    }
    await sendPasswordResetEmail(
        existingToken.email,
        existingToken.token,
    );
    
    return { success :"Reset email sent successfully" };

};    