"use client";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hook/useCurrentUser";



const ClientPage =  () => {
  const user = useCurrentUser();
  return (

    <UserInfo
      label="Server Component User Info"
      user={user}
    />


  )
}

export default ClientPage
