import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"


export const { auth, handlers, signIn, signOut } = 
NextAuth({
    ...authConfig,
})