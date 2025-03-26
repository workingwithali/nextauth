'use client'

import React from 'react';

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
    const onClick = () => {
        console.log("Login button Clicked");
    };

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};
