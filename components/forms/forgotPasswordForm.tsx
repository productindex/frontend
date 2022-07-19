import React from "react";
import { TextField } from "@productindex/components/formElements/Textfield"
import { Authentication } from "../../api/auth";
import { toasty } from "../../util/toasty";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthErrorMessages } from "@productindex/const/errors";
import { AuthSuccessMessages } from "@productindex/const/success";
import { FormLink } from "@productindex/components/formElements/FormLink";

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
    <>
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
      <br />
      <div>
        <p className="body">
          Remembered? {' '}
          <span>
            <FormLink text='Sign In' href='/signin' />
          </span>
        </p>
      </div>
    </>
  );
};
export { ForgotPasswordForm };
