"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link";

interface BackButtonProps {
    herf: string;
    label:string;
}

export const BackButton = ({
    herf,
    label
}:BackButtonProps)=>{
    return (
        <Button
            variant="link"
            className="w-full font-normal"
            size="sm"
            asChild
        >
            <Link href={herf}>
                {label}
            </Link>

        </Button>
    )
}
