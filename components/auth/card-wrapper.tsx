"use client"

import { Header } from "@/components/auth/header";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "../ui/card";
import { Social } from "@/components/auth/Social";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLable: string;
    backButtonLable: string;
    backButtonHref: string;
    showsocail?: boolean;
}
export const CardWrapper = ({
    children,
    headerLable,
    backButtonLable,
    backButtonHref,
    showsocial
}: CardWrapperProps) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headerLable} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showsocial && (
                <CardFooter>
                    <Social/>
                </CardFooter>
            )
            }
        </Card>
    );
}