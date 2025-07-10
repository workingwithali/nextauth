"use server";
import * as z from "zod";
import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

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
    return { success :"Reset email sent successfully" };

};    