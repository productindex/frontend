import React, { useState } from "react";
import { TextField } from "@productindex/components/formElements/Textfield";
import NavBar from "@productindex/components/Navigation/Navbar";
import ProfileSidebar from "@productindex/components/ProfileSidebar";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { User } from "@productindex/api/user";
import { toasty } from "@productindex/util/toasty";
import { AuthErrorMessages } from "@productindex/const/errors";
import { AuthSuccessMessages } from "@productindex/const/success";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect} from "react";
import Cookies from 'js-cookie';

export default function Profile() {
  const router = useRouter();
  useEffect(() => {
    if (!Cookies.get('isLoggedIn')) {
      router.replace("/");
    }
  });
  const [disableButton, setDisableButton] = useState(true);
  const clearFields = () => {
    formik.setFieldValue('currentPassword', '')
    formik.setFieldValue('newPassword', '')
    formik.setFieldValue('newPasswordConfirm', '')
    setDisableButton(true)
  }

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: ''
    },
    onSubmit: async (values) => {
      const {error}  = await User.changePassword(values.currentPassword, values.newPassword, values.newPasswordConfirm)
      if (error) return toasty('error', error)
      toasty('success', AuthSuccessMessages.successPasswordChange)
      clearFields()
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required(AuthErrorMessages.passwordRequired)
        .min(8, AuthErrorMessages.passwordStringLength).notOneOf([Yup.ref('currentPassword')], AuthErrorMessages.passwordSameAsCurrent),
      newPasswordConfirm: Yup.string()
      .required(AuthErrorMessages.passwordRequired)
      .min(8, AuthErrorMessages.passwordStringLength)
      .oneOf([Yup.ref('newPassword')], AuthErrorMessages.passwordsMatchError)
    })
    
  })
  const handleChange = (e) => {
    e.preventDefault();
    if (disableButton) {
      setDisableButton(false);
    }
  };

  return (
    <>
      <Head>
        <title>Product Index: Update your password</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <body>
        <main>
        <div className="container">
          <NavBar />
          <br />
          <div className="side-by-side">
            <ProfileSidebar />
            <div className="profile">
              <div className="form"></div>
                <div className="form-header">
                  <h4>Profile - Update password</h4>
                  <hr />
                </div>
              <form onSubmit={formik.handleSubmit} onChange={handleChange}>
                <TextField
                  name="currentPassword"
                  valueType="password"
                  valueLabel="Current Password"
                  onChange={formik.handleChange}
                  value={formik.values.currentPassword}
                  error={formik.errors.currentPassword}
                  showLabel
                  onBlur={formik.handleBlur}
                />
                <TextField
                  name="newPassword"
                  valueType="password"
                  valueLabel="New Password"
                  onChange={formik.handleChange}
                  value={formik.values.newPassword}
                  error={formik.errors.newPassword}
                  showLabel
                  onBlur={formik.handleBlur}
                />
                <TextField
                  name="newPasswordConfirm"
                  valueType="password"
                  valueLabel="Confirm New Password"
                  onChange={formik.handleChange}
                  value={formik.values.newPasswordConfirm}
                  error={formik.errors.newPasswordConfirm}
                  showLabel
                  onBlur={formik.handleBlur}
                />

                <input
                  type="submit"
                  value={formik.isSubmitting? "Updating password..." : "Update Password"}
                  disabled={disableButton}
                  className="btn btn-primary btn-form"
                />
              </form>
              </div>

              <style>
                {`
                    .profile {
                      width: 100%
                    }

                    h4 {
                      margin-bottom: .75rem;
                    }
                    form,
                    .form-header {
                      max-width: 450px;
                      width: 70%;
                      margin: 0 auto;
                    }
                    form {
                      margin-bottom: 3rem;
                    }
                    @media (max-width: 940px) {
                      .side-by-side {
                        flex-direction: column;
                      }

                    form,
                    .form-header {
                      width: 100%
                    }
                    
                      .rightpane {
                        width: 100%;
                      }
                    }
                  
                  `}
              </style>
            </div>

          </div>
          </main>
          <footer>
                <p>2022 Product Index. All rights reserved. Designed by AquaUx</p>
          </footer>
        </body>
    </>
  );
  
}
