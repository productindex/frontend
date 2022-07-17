import React, { useState } from "react";
import { TextField } from "../textfield";
import { useRouter } from "next/router";
import { Authentication } from "../../api/auth";
import { toasty } from "../../util/toasty";
import { AuthSuccessMessages } from "../../const/success";
import { useFormik } from "formik";
import * as Yup from "yup";

const ResetPasswordForm: React.FC = () => {
  const router = useRouter();
  const { token } = router.query; // To verify password change

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
      password: Yup.string().required("Password is required"),
    }),
  });

  return (
    <div className="form pane-form">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="password"
          valueType="password"
          valueLabel="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="med-textbox"
          error={formik.errors.password}
          onBlur={formik.handleBlur}
        />

        <input
          type="submit"
          value="Reset my password"
          className="btn btn-primary btn-form"
          disabled={formik.isSubmitting}
        />
      </form>
    </div>
  );
};
export { ResetPasswordForm };
