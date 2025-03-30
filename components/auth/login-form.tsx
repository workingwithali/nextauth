"use client"
import * as z from "zod"
import { LoginSchema } from "@/schemas"
import { CardWrapper } from "./card-wrapper"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"


export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

    
  return (
    
    <CardWrapper
      headerLabel="welcome Back"
      backButtonLabel="Don't have account?"
      backButtonHref="/auth/register"
      showsocial
    >
      login
    </CardWrapper>
  )
}


