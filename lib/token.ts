import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { db } from "@/lib/db";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

export const generateTwoFactorToken = async (email: string) => {
    const token = crypto.randomInt(100_000,1_000_000).toString(); // 6-digit token
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    const existingToken = await getTwoFactorTokenByEmail(email);

    if (existingToken) {
        const updatedToken = await db.passwordResetToken.update({
            where: {
                id: existingToken.id,
            },
            data: {
                email,
                token,
                expires,
            },
        });
        return updatedToken;
    } else {
        const newToken = await db.passwordResetToken.create({
            data: {
                email,
                token,
                expires,
            },
        });
        return newToken;
    }
};
export const generatePasswordResetToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    const existingToken = await getPasswordResetTokenByEmail(email);

    if (existingToken) {
        const updatedToken = await db.passwordResetToken.update({
            where: {
                id: existingToken.id,
            },
            data: {
                email,
                token,
                expires,
            },
        });
        return updatedToken;
    } else {
        const newToken = await db.passwordResetToken.create({
            data: {
                email,
                token,
                expires,
            },
        });
        return newToken;
    }
};
export const generateVerificationToken = async (email: string) => {
    const token = uuidv4();
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    const existingToken = await getVerificationTokenByEmail(email);

    if (existingToken) {
        const updatedToken = await db.verificationToken.update({
            where: {
                id: existingToken.id,
            },
            data: {
                email,
                token,
                expires,
            },
        });
        return updatedToken;
    } else {
        const newToken = await db.verificationToken.create({
            data: {
                email,
                token,
                expires,
            },
        });
        return newToken;
    }
};
