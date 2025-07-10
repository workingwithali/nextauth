"use server";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification_token";

export const newVerification = async (token: string) => {
    // Check if the token is valid
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) {
        throw new Error("Invalid verification token");
    }
    
    // Get the user associated with the token
    const existinguser = await getUserByEmail(existingToken.email);
    if (!existinguser) {
        throw new Error("User not found");
    }
    
    // Update the user's verification status
    await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date(), },
    });
    
    return { message: "User verified successfully" };
}
