"use client";
import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-secondary p-4 rounded-lg shadow-md w-[600px] flex justify-between items-">
      <div className="flex gap-x-4">
        <Button 
          asChild
          variant={pathname ==="/server"?"default":"outline"}
        >
          <Link href="/server">
            Server
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname ==="/client"?"default":"outline"}
        >
          <Link href="/client">
            Client
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname ==="/admin"?"default":"outline"}
        >
          <Link href="/admin">
            Admin
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname ==="/setting"?"default":"outline"}
        >
          <Link href="/setting">
            Settings
          </Link>
        </Button>

      </div>
      <UserButton/>
      
    </div>
  )
}

export default Navbar
