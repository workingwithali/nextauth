import * as z from "zod"


export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
});
export const ResetSchema = z.object({
    email: z.string().email({
        message: "Emai is required"
    })
});
export const LoginSchema = z.object({
    email: z.string().email({
        message: "Emai is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    }),
    code: z.optional(z.string())
});
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Valid email is required",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
    name: z.string().min(1, {
        message: "Name is required",
    }),
});

