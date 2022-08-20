import { Avatar } from "../bits/Avatar";
import Link from "next/link";
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Authentication } from "@productindex/api/auth";

type Props = {
  user?: any;
  dark?: boolean;
};

export const AvatarMenu = (props: Props) => {
  
  const authCtx = useContext(AuthContext);
  const handleSignOut = async () => {
    const { success } = await Authentication.logout()
    if (success) authCtx.logout();
  };

  return (
    <div className="avatar-menu">
      {authCtx.isLoggedIn ? (
        <>
          <Avatar displayPhotoSrc={authCtx.userData["profile_pic"]} />
          <div className="user-menu">
            <Link href="/profile">
              <a className="menu-option">Profile</a>
            </Link>
            <Link href={process.env.BUSINESS_URL}>
              <a
                className="menu-option"
                target="_blank"
                rel="noopener noreferrer"
              >
                Manage your business
              </a>
            </Link>
            <Link href="/help">
              <a className="menu-option">Help</a>
            </Link>
            <Link href="">
              <a className="menu-option" onClick={handleSignOut}>
                Logout
              </a>
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link href="/signin">
            <a href="/signin" className="auth-link">
              <button className="auth-link option">Sign in</button>
            </a>
          </Link>{" "}
          <Link href="/signup">
            <a href="/signup" className="auth-link">
              <button className="auth-link option">Sign up</button>
            </a>
          </Link>
        </>
      )}
      <style jsx>{`
        .avatar-menu {
          position: relative;
        }
        .user-menu {
          background-color: white;
          height: max-content;
          width: 200px;
          border-radius: 2px;
          padding: 0.5rem 0;
          top: 2.75rem;
          right: 0;
          lefft: 0;
          bottom: 0;
          position: absolute;
          display: none;
          box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.08),
            0px 20px 32px rgba(96, 97, 112, 0.24);
          z-index: 1000;
        }
        .avatar-menu:hover .user-menu {
          display: block;
        }
        .menu-option {
          padding: 0.5rem 0.5rem;
          display: block;
          text-decoration: none;
          color: #1c1c1c;
          font-size: 1rem;
        }
        .menu-option:hover {
          background-color: #f4f4f4;
          cursor: pointer;
        }
        .auth-link {
          text-decoration: none;
          color: #5c5c5c;
          font-weight: 500;
          transition: all 0.25s;
        }
        .auth-link:link,
        .auth-link:active {
          text-decoration: none;
          color: #5c5c5c;
        }
        .auth-link:hover {
          color: #2eb7be;
        }
        .option {
          padding: 12px 12px;
          border-radius: 2px;
          cursor: pointer;
          border: 0;
          background-color: transparent;
          font-size: 1rem;
          transition: all 0.4s;
          ${props.dark && "color: white"}
        }
        .option:hover {
          background-color: #f4f4f4;
          ${props.dark && "color: inherit"}
        }
        @media (max-width: 940px) {
          .auth-link:not(:first-child) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
