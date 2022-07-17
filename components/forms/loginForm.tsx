import React, { useState, useContext } from "react";
import Link from "next/link";
import { TextField } from "../textfield";
import { useRouter } from "next/router";
import { Authentication } from "../../api/auth";
import AuthContext from "../../context/AuthContext";
import { toasty } from "../../util/toasty";
import { AuthErrorMessages } from "../../const/errors";
import { useFormik } from "formik";
import * as Yup from "yup";

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
        .email("This doesn't seem like a valid email")
        .required("Email address is required"), // TODO: Add to const
      password: Yup.string().required("Password is required"),
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
          className="med-textbox"
          error={formik.errors.email}
          onBlur={formik.handleBlur}
        />
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
        <div className="forgot">
          <Link href="/forgot-password">
            <a className="link">Forgot password?</a>
          </Link>
        </div>

        <input
          type="submit"
          value="Sign in"
          disabled={formik.isSubmitting}
          className="btn btn-primary btn-form"
        />
      </form>
      <div className="linkbox">
        <p className="body">
          {" "}
          Not a member?{" "}
          <span className="link-text">
            <Link href="/signup">
              <a className="link">Sign Up</a>
            </Link>
          </span>
        </p>
      </div>

      <style>{`
      
        .forgot {
          padding: .5rem 0 1rem 0;
        }
  
      `}</style>
    </div>
  );
};
