import  Credentials  from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID as string, 
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        Github({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        Credentials({
            async authorize(credentials) {
                const ValidatedFields = LoginSchema.safeParse(credentials);
                if(ValidatedFields.success){
                    const { email, password } =ValidatedFields.data;
                    const user = await getUserByEmail(email);
                    if(!user || !password ||!user.password) return null;
                    const passwordMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );
                    if(passwordMatch) return user;
                }
                return null;

            },
        })

    ]
} satisfies NextAuthConfig