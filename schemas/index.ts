import { UserRole } from "@prisma/client";
import * as z from "zod"

export const settingSchema = z.object({
    name :z.optional(z.string()),
    isTwoFactorEnable :z.optional(z.boolean()),
    role :z.enum([UserRole.ADMIN,UserRole.USER]),
    email :z.optional(z.string()),
    password :z.optional(z.string()),
    newPassword :z.optional(z.string()),
})
    .refine((data) => {
        if (data.password && !data.newPassword) {
            return false;
        }
        if (!data.password && data.newPassword) {
            return false;
        }
        return true;
    },{
        message: "Password and new password must be provided together",
        path: ["newPassword"],
    });
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

