"use client"
import * as z from "zod"
import { NewPasswordSchema } from "@/schemas"
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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { NewPassword } from "@/actions/new-password"
import { useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"


export const NewPasswordForm = () => {

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      NewPassword(values , token)
        .then((data) => {
          setError(data?.error);
          setSuccess(data?.success);
        })
    })
  };


  return (

    <CardWrapper
      headerLabel="Enter New Password"
      backButtonLabel="Back to Login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button
            disabled={isPending}
            type="submit"
            className="w-full"
          >
            Reset Password
          </Button>
        </form>
      </Form>



    </CardWrapper>
  )
}


