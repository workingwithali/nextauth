"use client"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/route"
export const Social = () => {
    const onClick = (provider: "github" | "google" ) => {
        signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT  })
    } // onclick
    return (
        <div className="flex justify-center w-full gap-x-2">
            <Button
                size='lg'
                className="flex-1"
                variant="outline"
                onClick={() => {
                    onClick("google")
                }}
            >
                <FcGoogle className="w-5 h-5 mr-2" />
                Continue with Google
            </Button>
            <Button
                size="lg"
                className="flex-1"
                variant="outline"
                onClick={() => {
                    onClick("github")
                }}
            >
                <FaGithub className="w-5 h-5 mr-2" />
                Continue with GitHub
            </Button>
        </div>
    )
}
