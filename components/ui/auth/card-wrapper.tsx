"use client"

import { 
    Card,
    CardContent,
    CardHeader,
    CardFooter
 } from "../card";
import { Header } from "./header";

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
            <CardContent>
                <Header label={headerLable} />
            </CardContent>
            {children}
        </Card>
    );
}