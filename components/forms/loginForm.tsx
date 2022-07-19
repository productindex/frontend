import React, { useContext } from "react";
import { TextField } from "@productindex/components/formElements/Textfield";
import { useRouter } from "next/router";
import { Authentication } from "../../api/auth";
import AuthContext from "../../context/AuthContext";
import { toasty } from "../../util/toasty";
import { AuthErrorMessages } from "../../const/errors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormLink } from "../formElements/FormLink";

export const LoginForm = () => {
  const router = useRouter();
  const authCtx = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await Authentication.login(values.email, values.password);
      toasty("error", res.error);

      if (res.success) {
        router.replace("/");
        authCtx.loadUser();
      }
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(AuthErrorMessages.invalidEmail)
        .required(AuthErrorMessages.emailAddressRequired),
      password: Yup.string().required(AuthErrorMessages.passwordRequired),
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
        <div>
          <FormLink text={'Forgot Password?'} href={'/forgot-password'}/>
        </div>
        <br />

        <input
          type="submit"
          value="Sign in"
          disabled={formik.isSubmitting}
          className="btn btn-primary btn-form"
        />
      </form>
      <div>
        <br />
        <p className="body"> Not a member? { ' ' }
          <span>
            <FormLink text={'Sign Up'} href={'/signup'}/>
          </span>
        </p>
      </div>
    </>
  );
};
