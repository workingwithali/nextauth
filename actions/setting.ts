"use server"
import * as z from "zod";
import { settingSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { CurrentUser } from "@/lib/auth";


export const Setting = async (value: z.infer<typeof settingSchema>) => {
    const user = await CurrentUser();
    if(!user){
        return { error: "unauthorized" };
    }
    const dbUser = await getUserById(user.id);
    if(!dbUser){
        return { error: "unauthorized" };
    }
    if(user.isOAuth){
        value.email = undefined;
        value.password = undefined;
        value.newPassword = undefined;
        value.isTwoFactorEnabled = undefined;
    };

    await db.user.update({
        where: { id: user.id },
        data: {
            ...value,
        },
    });
    return { success: "setting updated" };
    
}
