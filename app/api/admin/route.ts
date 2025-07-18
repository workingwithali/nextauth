import { NextResponse } from "next/server";
import { CurrentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
export async function GET() {

    const role = await CurrentRole();
    if(role === UserRole.ADMIN){
        return new NextResponse(null,{status:200});
    }

    return new NextResponse(null,{status:403});
    
}