'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "mode" | "redirect";
    asChild?: boolean;
}

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {
    const router = useRouter()
    const onClick = () => {
        router.push("/auth/login")
    };
    if(mode === "modle"){
        return(
            <span>
                todo :implement modle
            </span>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};
