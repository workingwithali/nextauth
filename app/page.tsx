import { LoginButton } from "@/components/ui/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Baloo_2 } from "next/font/google";
const font = Baloo_2({
  subsets: ["devanagari"],
  weight: ["600"]
})
export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-white text-6xl font-bold drop-shadow-md",font.className)}>Auth</h1>
        <p className="text-white text-lg">A simple authentication server</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size='lg'>Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
