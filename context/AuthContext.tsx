import React, { useState, createContext }from 'react'
import { Authentication } from '../api/auth';

interface UserAttributes {
    user_id?: number;
    first_name?: string;
    last_name?: string;
    email_address?: string;
    profile_pic?: string;
}

const AuthContext = createContext({
    userData: {},
    isLoggedIn: false,
    loadUser: () => {},
    logout: () => {}
});


export const AuthContextProvider = (props) => {
    const [userData, setUserData] = useState({})
    const userIsLoggedIn = !(Object.keys(userData).length === 0);
    const loadUserDetails = () => {
        if (localStorage.getItem('isLoggedIn')) {
            Authentication.getUserDetails().then((data)=> {
                const {id, first_name, last_name, email_address, profile_pic_url} = data.data
                const user : UserAttributes = {
                    user_id: id,
                    first_name: first_name,
                    last_name: last_name,
                    email_address: email_address,
                    profile_pic: profile_pic_url
                }
                setUserData(user)
            }).catch(async () => {
                setUserData({})
                await Authentication.logout()
            })
        }
        return

    }
    const logoutHandler = async () => {
        await Authentication.logout()
        setUserData({})

    }
    const contextValue = {
        userData: userData,
        isLoggedIn: userIsLoggedIn,
        loadUser: loadUserDetails,
        logout: logoutHandler
    };
    return <AuthContext.Provider value={contextValue}> {props.children} </AuthContext.Provider>
}
export default AuthContext