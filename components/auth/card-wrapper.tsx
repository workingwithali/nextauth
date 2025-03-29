"use client"

import { Social } from "@/components/auth/Social";
import { Header } from "@/components/auth/header";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "../ui/card";
import { BackButton } from "./back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showsocial?: boolean;
}
export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showsocial
}: CardWrapperProps) => {
    return (
        <Card className="w-full max-w-md shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
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
            <CardFooter>
                <BackButton
                    label={backButtonLabel}
                    herf={backButtonHref}
                />
            </CardFooter>
        </Card>
    );
}