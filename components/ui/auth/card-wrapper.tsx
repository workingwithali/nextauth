"use client"

import { Card } from "../card";

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
        <Card>
            
        </Card>
    )
}