import React, {useState} from "react";
import { TextField } from "@productindex/components/formElements/Textfield";
import { useRouter } from "next/router";
import { Authentication } from "../../api/auth";
import { toasty } from "../../util/toasty";
import { AuthSuccessMessages } from "../../const/success";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthErrorMessages } from '../../const/errors';

const ResetPasswordForm: React.FC = () => {
  const router = useRouter();
  const { token } = router.query; // To verify password change
  const [isLoading, setLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true)
      const response = await Authentication.resetPassword(
        token,
        values.password
      );
      setLoading(false)
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
          value={isLoading? "Resetting password..." : "Reset my password"}
          className="btn btn-primary btn-form"
          disabled={isLoading}
        />
      </form>
    </>
  );
};
export { ResetPasswordForm };
