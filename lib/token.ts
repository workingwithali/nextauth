import { v4 as uuidv4 } from "uuid";
import { db } from "@/lib/db";
import { getVerificationTokenByEmail } from "@/data/verification_token";

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
