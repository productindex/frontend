import React, { useEffect, useState } from "react";
import { Authentication } from "../../api/auth";
import { TextField } from "../../components/textfield";
import NavBar from "../../components/navbar";
import ProfileSidebar from "../../components/ProfileSidebar";

type Props = {};
interface ErrObj {
  firstname?: string;
  lastname?: string;
  email?: string;
  telephone?: string;
  birthday?: string;
  gender?: string;
  country?: string;
  state?: string;
  city?: string;
}

export default function Profile(props: Props) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
  const [formChange, setFormChange] = useState(true);
  const [error, setError] = useState<ErrObj>({});

  const user = {
    current_password: currentPassword,
    new_password: newPassword,
    new_password_confirm: newPasswordConfirm,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

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
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <TextField
              name="current-password"
              valueType="password"
              valueLabel="Current Password"
              onChange={(e: any) => setCurrentPassword(e.target.value)}
              value={currentPassword}
              className="med-textbox"
              error={error.firstname}
            />
            <TextField
              name="new-password"
              valueType="password"
              valueLabel="New Password"
              onChange={(e: any) => setNewPassword(e.target.value)}
              value={newPassword}
              className="med-textbox"
              error={error.lastname}
            />
            <TextField
              name="password-confirm"
              valueType="password"
              valueLabel="Confirm New Password"
              onChange={(e: any) => setNewPasswordConfirm(e.target.value)}
              value={newPasswordConfirm}
              className="med-textbox"
              error={error.lastname}
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
