import * as z from "zod";
import { SettingSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { CurrentUser } from "@/lib/auth";


export const Setting = async (value: z.infer<typeof SettingSchema>) => {
    const user = await CurrentUser();
    if(!user){
        return { error: "unauthorized" };
    }
    const dbUser = await getUserById(user.id);
    if(!dbUser){
        return { error: "unauthorized" };
    }
    await db.user.update({
        where: { id: user.id },
        data: {
            ...value,
        },
    });
    return { success: "setting updated" };
    
}
