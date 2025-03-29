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
    showsocial
}:CardWrapperProps)=>{
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLable} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showsocial&&(
                <CardFooter>
                    
                </CardFooter>
            )
            }
        </Card>
    );
}