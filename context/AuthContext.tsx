import React, { useState, createContext }from 'react'
import { authAxios } from '../util/axios';

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
        if (!userIsLoggedIn && localStorage.getItem('isLoggedIn')) {
            authAxios({
                method: 'get',
                url: `${process.env.BACKEND_URL}/api/user/1`,
            }).then(({data})=> {
                const user = {
                    user_id: data.id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email_address: data.email_address,
                    profile_pic: data.profile_pic_url
                }
                setUserData(user)
                
                
            })
        }
        if (!localStorage.getItem('isLoggedIn') && userIsLoggedIn) {
            localStorage.setItem('isLoggedIn', 'true')
        }
        return

    }
    const logoutHandler = () => {
        setUserData(null)
        localStorage.removeItem('isLoggedIn')
        authAxios({
            method: 'get',
            url: `${process.env.BACKEND_URL}/api/auth/logout`,
        }).then(({data})=> {
            return
            
        })

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