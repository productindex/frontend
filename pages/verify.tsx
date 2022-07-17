import Head from "next/head";
import { useEffect, useState } from "react";
import { Authentication } from "../api/auth";
import { useRouter } from "next/router";
import { toasty } from "../util/toasty";
import { AuthSuccessMessages } from "../const/success";
import { AuthErrorMessages } from "../const/errors";

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
