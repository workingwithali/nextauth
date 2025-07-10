"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { newVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const token = useSearchParams().get("token");
  const onSubmit = useCallback(() => {
    if (!token) {
      setError("Missing token");
      return;
    }
    newVerification(token)
      .then((result) => {
        if (result.error) {
          setError(result.error);
        } else {
          setSuccess(result.success);
        }
      })
      .catch(() => {
        setError("An error occurred while processing your request.");
      })
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
        {!success && !error && (
          <BeatLoader />
        )}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>

    </CardWrapper>
  );
}