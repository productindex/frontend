import React from "react";
import { TextField } from "@productindex/components/formElements/Textfield"
import { useRouter } from "next/router";
import { AuthErrorMessages } from "@productindex/const/errors";
import { useFormik } from "formik";
import * as Yup from "yup";
import { User } from "@productindex/api/user";
import { FormLink } from "@productindex/components/formElements/FormLink";

const SignupForm: React.FC = () => {
  const validateEmail = async () => {
    const { data } = await User.find(formik.values.email, null);
    if (data) {
      return false
      ;
    }
    return true
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
    },
    onSubmit: async (values) => {
      if (!formik.errors['email']){
        sessionStorage.setItem("isSigningUp", "true");
        router.replace(
          {
            pathname: "/onboarding",
            query: {
              firstname: values.firstname,
              lastname: values.lastname,
              email_address: values.email,
              password: values.password,
            },
          },
          "/signup"
        );
      }
      
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(AuthErrorMessages.emailInvalidFormat)
        .required(AuthErrorMessages.emailAddressRequired)
        .test('Unique Email', AuthErrorMessages.emailTaken, async () => await validateEmail() ),
      password: Yup.string()
        .required(AuthErrorMessages.passwordRequired)
        .min(8, AuthErrorMessages.passwordStringLength),
      firstname: Yup.string()
        .required(AuthErrorMessages.firstNameRequired)
        .min(2, AuthErrorMessages.nameMinCharacters),
      lastname: Yup.string()
        .required(AuthErrorMessages.lastNameRequired)
        .min(2, AuthErrorMessages.nameMinCharacters),
    }),
  });


  const router = useRouter();

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="double-textbox">
          <TextField
            name="firstname"
            valueType="text"
            valuePlaceholder="John"
            valueLabel="First name"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            error={formik.errors.firstname}
            onBlur={formik.handleBlur}
            showLabel
          />
          <TextField
            name="lastname"
            valueType="text"
            valuePlaceholder="Doe"
            valueLabel="Last name"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            error={formik.errors.lastname}
            onBlur={formik.handleBlur}
            showLabel
          />
        </div>

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
        <div className="legal-box">
          <small>
            Creating an account means that you’ve read and agreed to our{" "}
            <span className="link">
              <FormLink href={"/help/terms-of-service"} text={"Terms of Service"}/>
            </span>{" "}
            and{" "}
            <span>
              <FormLink href={"/help/privacy"} text={"Privacy policy"}/>
            </span>
          </small>
        </div>

        <input
          type="submit"
          value="Sign up"
          className="btn btn-primary btn-form"
        />
      </form>
      <div>
        <br />
        <p>
          Already a member?{" "}
          <span>
            <FormLink href={"/signin"} text={"Sign In"}/>
            
          </span>
        </p>
      </div>

      <style>{`
        .legal-box {
          width: 100%;
          display: inline-block;
          position: relative;
          transform: translateY(-1rem);
        }
  
      `}</style>
    </>
  );
};
export { SignupForm };
