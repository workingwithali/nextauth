"use server";
import { CurrentRole } from "@/lib/auth";   
import { UserRole } from "@prisma/client";  


export const Admin = async () => {
    const role = await CurrentRole();
    if(role === UserRole.ADMIN){
        return {success: "You are an admin"};
    }

    return {error: "You are not an admin"};
}
