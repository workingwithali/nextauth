"use client";
import { logout } from "@/actions/signout";



const SettingPage = () => {

  const onClick = () => {
    logout();
  }

  return (
    <div className="bg-white p-10 rounded-xl shadow-md">
        <button type="submit" onClick={onClick}>
          signout
        </button>
      
    </div>
  )
}

export default SettingPage
