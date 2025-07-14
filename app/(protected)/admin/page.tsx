// "use client";
import { useCurrentRole } from "@/hook/useCurrentRole"
import { FormSuccess } from "@/components/form-success";
import { UserRole } from "@prisma/client";
import { 
  Card,
  CardContent,
  CardHeader,

 } from "@/components/ui/card";
import { RoleGate } from "@/components/auth/role-gate";

const Adminpage =  () => {
    
  return (
    <Card className="w-[600px] ">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin Page</p>
      </CardHeader>
      <CardContent>
        <RoleGate allowedRoles={UserRole.ADMIN}>
          <FormSuccess message="You are an admin" />
        </RoleGate>
      </CardContent>
    </Card>
    
  )
}

export default Adminpage
