import  Credentials  from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "@/data/user";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const ValidatedFields = LoginSchema.safeParse(credentials);
                if(ValidatedFields.success){
                    const { email, password } =ValidatedFields.data;
                    const user = await getUserByEmail(email);
                    if(!email || !password) return null;
                    const passwordMatch =await
                }
            },
        })

    ]
} satisfies NextAuthConfig