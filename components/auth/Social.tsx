"use client"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export const Social = () => {
    return (
        <div className="flex justify-center w-full gap-x-2">
            <Button
                size='lg'
                className="flex-1"
                variant="outline"
                onClick={() => {
                    // handle Google login
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
                    // handle GitHub login
                }}
            >
                <FaGithub className="w-5 h-5 mr-2" />
                Continue with GitHub
            </Button>
        </div>
    )
}
