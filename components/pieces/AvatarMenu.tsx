import { Avatar } from '../bits/Avatar';
import Link from 'next/link';

import React from 'react'

type Props = {
    user?: string;
    dark?: boolean;
}

export const AvatarMenu = (props: Props) => {
  return (
      //Check to see if user is logged in. Display 'Login' if user isn't
    <div className='avatar-menu'> 
        { props.user? 
        <>
            <Avatar />
            <div className="user-menu">
                <Link href='/profile'><a className="menu-option">Profile</a></Link>
                <Link href={process.env.BUSINESS_URL} ><a className="menu-option" target="_blank" rel="noopener noreferrer">Manage your business</a></Link>
                <Link href='/help'><a className="menu-option">Help</a></Link>
                <Link href='/logout'><a className="menu-option">Logout</a></Link>
            </div>
        </>
        :
        <><Link href='/signin'><button className='auth-link option'>Sign in</button></Link> <Link href='/signup'><button className='auth-link option'>Sign up</button></Link></>
        }
    <style jsx>{`
        .avatar-menu  {
            position: relative;
        }
        .user-menu {
            background-color: white;
            height: max-content;
            width: 200px;
            border-radius: 2px;
            padding: .5rem 0;
            top: 2.75rem;
            right: 0;
            lefft: 0;
            bottom: 0;
            position: absolute;
            display: none;
            box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.08), 0px 20px 32px rgba(96, 97, 112, 0.24);
            z-index: 1000;
        }
        .avatar-menu:hover .user-menu {
            display: block;
        }
        .menu-option {
            padding: .5rem .5rem;
            display: block;
            text-decoration: none;
            color: #1c1c1c;
            font-size: 1rem;
        }
        .menu-option:hover {
            background-color: #F4F4F4;
            cursor: pointer;
        }
        .auth-link {
            text-decoration: none;
            color: #5C5C5C;
            font-weight: 500;
            transition: all .25s;
        }
        .auth-link:link,
        .auth-link:active {
            text-decoration: none;
            color: #5C5C5C;
        }
        .auth-link:hover {
            color: #2EB7BE;
        }
        .option {
            padding: 12px 12px;
            border-radius: 2px;
            cursor: pointer;
            border: 0;
            background-color: transparent; 
            font-size: 1rem;
            transition: all 0.4s;
            ${props.dark && 'color: white'}
        }
        .option:hover {
            background-color: #F4F4F4;
            ${props.dark && 'color: inherit'}
            
        }
        @media (max-width: 940px) {
            .auth-link:not(:first-child) {
                display: none;
            }
        }
    `}</style>
</div>
  )
}