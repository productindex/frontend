import AuthContext from '../context/AuthContext'
import { useContext, useEffect } from 'react';

export const InitialPageLayout = (props) => {
    const authCtx = useContext(AuthContext);
    useEffect(()=> { 
        authCtx.loadUser() 
    }, [])

    return <> {props.children} </>
}