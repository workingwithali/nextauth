"use client";
import { FaUser } from "react-icons/fa";
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
                <DropdownMenuContent>
                    <LogoutButton>
                        <DropdownMenuItem>
                            Logout
                        </DropdownMenuItem>
                    </LogoutButton>
                </DropdownMenuContent>

            </DropdownMenu>
        </div>
    );
 };