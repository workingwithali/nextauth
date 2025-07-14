"use client";

import { useCurrentRole } from "@/hook/useCurrentRole";
import { UserRole } from "@prisma/client";
import { FormError } from "@/components/form-error";

interface RoleGateProps {
    allowedRoles: UserRole;
    children: React.ReactNode;
}


export const RoleGate = ({ allowedRoles, children }: RoleGateProps) => {
    const role = useCurrentRole();
    if(role!==allowedRoles){
        return <FormError  message="You are not authorized to access this page"/>
    }
    return <>{children}</>;
};