import { useEffect, useState } from "react";
import { Authentication } from "@productindex/api/auth";
import { useRouter } from "next/router";
import { toasty } from "@productindex/util/toasty";
import { AuthSuccessMessages } from "@productindex/const/success";
import { AuthErrorMessages } from "@productindex/const/errors";

export default function Verify() {
  const router = useRouter();
  const verifyAccount = async () => {
    if (router.isReady) {
      const { token } = router.query;
      const { success } = await Authentication.verify(token);
      if (success) {
        return toasty("success", AuthSuccessMessages.verified);
      }
      return toasty("error", AuthErrorMessages.verificationFailed);
    }
  };
  useEffect(() => {
    verifyAccount();
    router.replace("/");
  }, [router.isReady]);
  return <></>;
}
