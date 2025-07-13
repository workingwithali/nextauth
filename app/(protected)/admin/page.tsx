// "use client";
import { useCurrentRole } from "@/hook/useCurrentRole"
import { CurrentRole } from "@/lib/auth";

const Adminpage = async () => {
    const role = await CurrentRole();
  return (
    <div>
      current role: {role}
    </div>
  )
}

export default Adminpage
