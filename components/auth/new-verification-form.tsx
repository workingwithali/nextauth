"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { BeatLoader } from "react-spinners";

export const NewVerificationForm = () => {
  return (

    <CardWrapper
      headerLabel="New Verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex flex-col items-center justify-center h-full">
        <BeatLoader />
      </div>

    </CardWrapper>
  );
}