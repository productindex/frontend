import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";


export default function ProfileSidebar() {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div className="profile-sidebar">
      <div className="profile-sidebar-container">
      <h6>Your Profile</h6>
      <Link href="/profile">
        <a className={`nav-selector ${currentRoute == '/profile' && 'active'}`}>Details</a>
      </Link>
      <Link href="/profile/password">
        <a className={`nav-selector ${currentRoute == '/profile/password' && 'active'}`}>Password</a>
      </Link>
      </div>


      <style>
        {`
        .profile-sidebar {
          width: 20%;
        }
            .nav-selector {
                padding: 12px 8px;
                margin-bottom: 4px;
                border-radius: 4px;
                display: block;
                
            }
            .active {
              background-color: #E5E9E8;
              font-weight: 700;
            }
            .nav-selector:hover {
                background-color: #F4F4F4;
            }
            .nav-selector:active {
                background-color: #E5E9E8;
            }
            
            .profile-sidebar-container{
                width: 100%;
            }

            .nav-selector:visited,
            .nav-selector:link {
                text-decoration: none;
                color: #1c1c1c;
                letter-spacing: 1px;
            }
            .profile-sidebar-container h6 {
              margin-bottom: .5rem;
            }
            @media (max-width: 940px) {

              .profile-sidebar {
                width: 100%;
                padding-bottom: 1rem;
              }
              .profile-sidebar-container {
                width: 100%;
                max-width: 450px;
                margin: 0 auto;
              }
              .nav-selector {
                display: inline-block;
                margin-right: .5rem;
                border: 1.5px solid #e5e9e8;
              }

            }
        `}
      </style>
    </div>
  );
}
