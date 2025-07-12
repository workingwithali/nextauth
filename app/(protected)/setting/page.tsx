import { auth, signOut } from "@/auth"

const SettingPage = async() => {
    const session = {};
    
  return (
    <div>
      {JSON.stringify(session)}
      <form >
        <button type="submit">
          signout
        </button>
      </form>
    </div>
  )
}

export default SettingPage
