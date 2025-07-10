"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { BeatLoader } from "react-spinners";

export const NewVerificationForm = () => {
  const token = useSearchParams().get("token");
  const onSubmit = useCallback(() => {
    console.log("Token received:", token);
  }, [token]);
  useEffect(() => { 
      onSubmit();  
  }, [onSubmit]);

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