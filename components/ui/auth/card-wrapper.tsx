"use client"

import { 
    Card,
    CardContent,
    CardHeader,
    CardFooter
 } from "../card";

interface CardWrapperProps{
    children: React.ReactNode;
    headerLable :string;
    backButtonLable: string;
    backButtonHref : string;
    showsocail?: boolean;
}
export const CardWrapper = ({
    children,
    headerLable,
    backButtonLable,
    backButtonHref,
    showsocail
}:CardWrapperProps)=>{
    return (
        <Card className="w-[400px] shadow-md">
            {children}
        </Card>
    );
}