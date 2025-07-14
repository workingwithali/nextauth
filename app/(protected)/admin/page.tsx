"use client";

import { FormSuccess } from "@/components/form-success";
import { UserRole } from "@prisma/client";
import { 
  Card,
  CardContent,
  CardHeader,

 } from "@/components/ui/card";
import { RoleGate } from "@/components/auth/role-gate";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Admin } from "@/actions/admin";

const Adminpage =  () => {
  const onClickApiRoute = async () => {
    fetch("/api/admin")
      .then((response)=>{
        if(response.ok){
            toast.success("Allowed Api Route");
        }else{
            toast.error("Forbidden Api Route");
        }
      })
  }
  const onClickApiServerAction =  () => {
    Admin()
    .then((res)=>{
      if(res.success){
        toast.success("Allowed Api Server Action");
      }
      if(res.error){
        toast.error("Forbidden Api Server Action");
      }
    })
    
    
    
  }
    
  return (
    <Card className="w-[600px] ">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin Page</p>
      </CardHeader>
      <CardContent>
        <RoleGate allowedRoles={UserRole.ADMIN}>
          <FormSuccess message="You are an admin" />
        </RoleGate>
        <div className="flex flex-row justify-between items-center rounded-xl broader p-3 shadow-md">
          <p className="text-sm font-medium">
            Admin-only API route
          </p>
          <Button onClick={onClickApiRoute}>click to test</Button>
        </div>
        <div className="flex flex-row justify-between items-center rounded-xl broader p-3 shadow-md">
          <p className="text-sm font-medium">
            Admin-only API Server Action
          </p>
          <Button onClick={onClickApiServerAction}>click to test</Button>
        </div>
      </CardContent>
    </Card>
    
  )
}

export default Adminpage
