import * as z from "zod"

export const LoginSchema = z.object({
    email : z.string().email({
        message:"Emai is required"
    }),
    password: z.string().min(1,{
        message:"Password is required"
    })
});
export const RegisterSchema = z.object({
    email : z.string().email({
        message:"Emai is required"
    }),
    password: z.string().min(6,{
        message:"Enter at least 6 character"
    }),
    name: z.string().min(1,{
        message:"Enter you name"
    })
});
