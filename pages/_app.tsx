import '../styles.css'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useEffect } from 'react'
import { authAxios } from '../util/axios';
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  return (
    <UserContext.Provider value="hello">
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}