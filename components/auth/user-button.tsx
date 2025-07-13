"use client";
import { FaUser } from "react-icons/fa";
import { ExitIcon} from "@radix-ui/react-icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger

} from "@/components/ui/dropdown-menu";
import { 
    Avatar, 
    AvatarFallback,
    AvatarImage
 } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hook/useCurrentUser";
import { LogoutButton } from "@/components/auth/logout-button";

 export const UserButton = () => {
    const user = useCurrentUser();
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={user?.image || ""} />
                        <AvatarFallback className="bg-sky-500">
                            <FaUser className="text-white" />
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <LogoutButton>
                        <DropdownMenuItem>
                            <ExitIcon className="mr-2 w-2 h-2"/>
                            Logout
                        </DropdownMenuItem>
                    </LogoutButton>
                </DropdownMenuContent>

            </DropdownMenu>
        </div>
    );
 };