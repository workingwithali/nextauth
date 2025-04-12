"use server"
import * as z from "zod"
import bcrypt from "bcrypt";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";

export const register = async(value: z.infer<typeof RegisterSchema>)=>{
    const validatedFields = RegisterSchema.safeParse(value);
    if(!validatedFields.success){
        return {error :"Invalid field"};
    }
    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password,10);
    const normalizedEmail = email.trim().toLowerCase();
    

    const existingUser = await db.user.findUnique({
        where: {
            email: normalizedEmail,
        },
    });

    if(existingUser){
        return { error: "Email is already in use!"}
    }
    
    await db.user.create({
  data: {
    name,
    email: normalizedEmail,
    password: hashedPassword,
  },
});
    // todo verfication message later
    return {success: "User created!"};
}