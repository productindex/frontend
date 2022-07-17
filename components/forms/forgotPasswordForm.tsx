import React from "react";
import Link from "next/link";
import { TextField } from "@productindex/components/formElements/Textfield"
import { Authentication } from "../../api/auth";
import { toasty } from "../../util/toasty";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthErrorMessages } from "@productindex/const/errors";
import { AuthSuccessMessages } from "@productindex/const/success";

const ForgotPasswordForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      const response = await Authentication.forgotPassword(values.email);
      if (response.success)
        toasty(
          "success",
          AuthSuccessMessages.forgotPassword
        );
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(AuthErrorMessages.invalidEmail)
        .required(AuthErrorMessages.emailAddressRequired),
    }),
  });

  return (
    <div className="form pane-form">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="email"
          valueType="email"
          valuePlaceholder="me@example.com"
          valueLabel="Email address"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
          onBlur={formik.handleBlur}
          showLabel
        />

        <input
          type="submit"
          value="Send me reset instructions"
          className="btn btn-primary btn-form"
          disabled={formik.isSubmitting}
        />
      </form>
      <div className="linkbox">
        <p className="body">
          Remembered?
          <span className="link-text">
            <Link href="/signin">
              <a className="link">Sign In</a>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export { ForgotPasswordForm };
