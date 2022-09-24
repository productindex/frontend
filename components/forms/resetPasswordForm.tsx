import React from "react";
import { TextField } from "@productindex/components/formElements/Textfield";
import { useRouter } from "next/router";
import { Authentication } from "@productindex/api/auth";
import { toasty } from "@productindex/util/toasty";
import { AuthSuccessMessages } from "@productindex/const/success";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthErrorMessages } from '@productindex/const/errors';

const ResetPasswordForm: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: async (values) => {
      const response = await Authentication.resetPassword(
        token,
        values.password
      );
      if (!response.success) {
        toasty("error", response.error);
      } else {
        toasty("success", AuthSuccessMessages.successfulPasswordReset);
        setTimeout(function () {
          router.push("/");
        }, 5000);
      }
    },
    validationSchema: Yup.object({
      password: Yup.string().required(AuthErrorMessages.passwordRequired),
    }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="password"
          valueType="password"
          valueLabel="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
          onBlur={formik.handleBlur}
          showLabel
        />

        <input
          type="submit"
          value={formik.isSubmitting? "Resetting password..." : "Reset my password"}
          className="btn btn-primary btn-form"
          disabled={formik.isSubmitting}
        />
      </form>
    </>
  );
};
export { ResetPasswordForm };
