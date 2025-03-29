import { CardWrapper } from "./card-wrapper"


export const LoginForm = () => {
  return (
    
    <CardWrapper
      headerLabel="welcome Back"
      backButtonLabel="Don't have account?"
      backButtonHref="/auth/register"
      showsocial
    >
      login
    </CardWrapper>
  )
}


