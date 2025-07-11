"use server"
import * as z from "zod"
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken , generateTwoFactorToken } from "@/lib/token";
import { sendVerificationEmail , sendTwoFactorEmail } from "@/lib/mail";

export const login = async(value: z.infer<typeof LoginSchema>)=>{
    const validatedFields = LoginSchema.safeParse(value);
    if(!validatedFields.success){
        return {error :"Invalid field"};
    }
    const { email , password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser || !existingUser.password) return {error:"Invalid credentials!"};

    if(!existingUser.emailVerified){
        const verificationToken = await generateVerificationToken(email);
        await sendVerificationEmail(
            verificationToken.email,
            verificationToken.token,
        );
        return {success :"comfimation email sent!"};
    }
    if(existingUser.isTwoFactorEnable && !existingUser.email){
        const twoFactorToken = await generateTwoFactorToken(email);
        await sendTwoFactorEmail(
            twoFactorToken.email,
            twoFactorToken.token,
        );
        return {ToFactor:true};
    }


    try{
        await signIn("credentials",{
            email,
            password,
            redirectTo : DEFAULT_LOGIN_REDIRECT,
        })

    }catch(error){
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {error:"Invalid credentials!"};
                default:
                    return {error:"something went wrong!"};

            }
        }
        throw error;

    }
}