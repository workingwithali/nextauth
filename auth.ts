import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import authConfig from "@/auth.config"



export const { auth, handlers, signIn, signOut } = 
NextAuth({
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
    }
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
})