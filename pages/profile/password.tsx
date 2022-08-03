import React, { useState } from "react";
import { Authentication } from "@productindex/api/auth";
import { TextField } from "@productindex/components/formElements/Textfield";
import NavBar from "@productindex/components/Navigation/Navbar";
import ProfileSidebar from "@productindex/components/ProfileSidebar";
import { useFormik } from 'formik';
import * as Yup from "yup";

export default function Profile() {
  const [formChange, setFormChange] = useState(true);

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: ''
    },
    onSubmit: async (values) => {
      console.log(values)
    },
    validationSchema: Yup.object({

    })
    
  })
  const handleChange = (e) => {
    e.preventDefault();
    if (formChange) {
      setFormChange(false);
    }
  };

  return (
    <div className="container">
      <NavBar />
      <br />
      <div className="side-by-side">
        <ProfileSidebar />
        <div className="profile">
          <h4>Profile - Update password</h4>
          <hr />
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
              value="Update Password"
              disabled={formChange}
              className="btn btn-primary btn-form"
            />
          </form>
          <style>
            {`
                .profile {
                  margin-left: 10%;
                }
                h4 {
                    margin-bottom: .75rem;
                }
                form {
                    min-width: 550px;
                }
              
              `}
          </style>
        </div>
      </div>
    </div>
  );
}
