import React from 'react'
import { BsExclamationTriangle } from 'react-icons/bs'
import { CardWrapper } from '@/components/auth/card-wrapper'
const ErrorCard = () => {
  return (
    <div>
      <CardWrapper headerLabel="oops! something went wrong" backButtonHref="/auth/login" backButtonLabel='back to login'>
        <div className="bg-destructive/15 p-3 rounded-md flex items-center text-sm gap-x-2 text-destructive">
          <BsExclamationTriangle className="h-4 w-4 " />
          <p>Something went wrong</p>
        </div>
      </CardWrapper>
    </div>
  )
}

export default ErrorCard
