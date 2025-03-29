import { CardWrapper } from "./card-wrapper"


export const LoginForm = () => {
  return (
    
    <CardWrapper
      headerLable="welcome Back"
      backButtonLable="Don't have account?"
      backButtonHref="/auth/register"
      showsocail
    >
      login
    </CardWrapper>
  )
}


