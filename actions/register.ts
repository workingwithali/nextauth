"use server"
import * as z from "zod"
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async(value: z.infer<typeof RegisterSchema>)=>{
    const validatedFields = RegisterSchema.safeParse(value);
    if(!validatedFields.success){
        return {error :"Invalid field"};
    }
    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password,10);    

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return { error: "Email is already in use!"}
    }
    
    await db.user.create({
  data: {
    name,
    email,
    password: hashedPassword,
  },
});
    // todo verfication message later
    return {success: "User created!"};
}