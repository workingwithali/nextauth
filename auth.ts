import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"
import authConfig from "@/auth.config"
import { getUserById } from "@/data/user"
import { getTwoFactorconfirmationByUserId } from "./data/two-factor-confirmation"
import { UserRole } from "@prisma/client"





export const { auth, handlers, signIn, signOut } =
    NextAuth({
        pages: {
            signIn: "/auth/login",
            error: "/auth/error",
        },
        events: {
            async linkAccount({ user }) {
                await db.user.update({
                    where: { id: user.id },
                    data: { emailVerified: new Date() }
                })

            }
        },
        callbacks: {
            async signIn({ user , account }) {
  
                if(account?.provider !== "credentials") return true;

                const existingUser = await getUserById(user.id);

                if (!existingUser?.emailVerified) return false;

                if (existingUser?.isTwoFactorEnable) {
                    const twoFactorConfirmation = await getTwoFactorconfirmationByUserId(existingUser.id);
                    
                    if (!twoFactorConfirmation) return false;

                    await db.twoFactorConfirmation.delete({
                        where: { id: twoFactorConfirmation.id }
                    })
                    
                }
                
                
                return true;
            },
            async session({ session, token }) {
        
                if (token.sub && session.user) {
                    session.user.id = token.sub
                }
                if (token.role && session.user) {
                    session.user.role = token.role as UserRole;
                }
                if (session.user) {
                    session.user.isTwoFactorEnable = token.isTwoFactorEnable as boolean;
                }
                if (session.user.name && session.user) {
                    session.user.name = token.name as string;
                }
                if (session.user.email && session.user) {
                    session.user.email = token.email as string;
                }
                return session;
            },
            async jwt({ token }) {
                if (!token.sub) return token;

                const existingUser = await getUserById(token.sub);

                if (!existingUser) return token;
                token.name = existingUser.name;
                token.email = existingUser.email;
                token.role = existingUser.role;
                token.isTwoFactorEnable = existingUser.isTwoFactorEnable;


                return token;
            },
        },
        adapter: PrismaAdapter(db),
        session: { strategy: "jwt" },
        ...authConfig,
    })