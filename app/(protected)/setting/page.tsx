"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Setting } from "@/actions/setting";
import { useState, useTransition } from "react";
import { settingSchema } from "@/schemas";
import { 
  Card,
  CardContent,
  CardHeader,
 } from "@/components/ui/card";
 import { 
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormDescription,
  FormMessage,
 } from "@/components/ui/form";
 import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";



const SettingPage = () => {
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof settingSchema>>({
    resolver: zodResolver(settingSchema),
    defaultValues: {
      name: "",
    },
  })
  const onSubmit = (value :z.infer<typeof settingSchema>) => {
    startTransition(() => {
      Setting(value)
      .then((res) => {
        if(res.success){
          update();
          setSuccess(res.success);
        }
        if(res.error){
          setError(res.error);
        }
      })
      
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
