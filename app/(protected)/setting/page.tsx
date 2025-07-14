"use client";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardHeader,
 } from "@/components/ui/card";
import { Setting } from "@/actions/setting";
import { useTransition } from "react";



const SettingPage = () => {
  const [isPending, startTransition] = useTransition();
  const onClick = () => {
    startTransition(() => {
      Setting( { name: "testsdsds" } );
    })
  }
  


  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Settings</p>
      </CardHeader>
      <CardContent>
          <Button disabled={isPending} onClick={ onClick }>change name</Button>
      </CardContent>
    </Card>
    
  );
}

export default SettingPage
