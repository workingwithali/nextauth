'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle
} from '@/components/ui/dialog';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { LoginForm } from '@/components/auth/login-form';
interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
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
    if (mode === "modal") {
        return (
            <Dialog>
                <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
                <DialogContent className='p-0 w-auto bg-transparent broader-none'>
                    <VisuallyHidden>
                        <DialogTitle>Login</DialogTitle>
                    </VisuallyHidden>
                    <LoginForm />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};
