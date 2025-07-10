"use server";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification_token";

export const newVerification = async (token: string) => {
    // Check if the token is valid
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) {
        return {error:"Token not found"};
    }
    // Check if the token is expired
    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
        return {error:"Token has expired"};
    }
    
    // Get the user associated with the token
    const existingUser = await getUserByEmail(existingToken.email);
    if (!existingUser) {
        return {error:"Email is not exist"};
    }
    
    // Update the user's verification status
    await db.user.update({
        where: { id: existingUser.id },
        data: { emailVerified: new Date(), },
    });
    
    // Delete the verification token
    await db.verificationToken.delete({
        where: { id: existingToken.id },
    });
    
    return { success : "User verified successfully" };
}
