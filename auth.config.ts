import  Credentials  from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const ValidatedFields = LoginSchema.safeParse(credentials);
                if(ValidatedFields.success){
                    const { email, password } =ValidatedFields.data;
                    const user = await getUserByEmail(email);
                    if(!user || !password) return null;
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