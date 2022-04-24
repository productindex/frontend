import React, {useEffect, useState} from 'react'
import { Authentication } from '../api/auth';
type Props = {}

export default function Profile  (props: Props) {

    const [user, setUser] = useState({})
    const loadUserDetails = async () => {
        const { data } = await Authentication.getUserDetails()
        setUser(data)
    }
    useEffect(()  => {
        loadUserDetails()
    }, [])
  return (
    <>
        <div>Hello {user['first_name']}</div> 
    </>
  )
}