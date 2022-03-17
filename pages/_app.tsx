import '../styles.css'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useEffect } from 'react'
import { authAxios } from '../util/axios';
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  // useEffect(()=> {
  //   if (localStorage.getItem('prod_index_user_token')) {
  //     authAxios({
  //       method: 'post',
  //       url: `${process.env.BACKEND_URL}/api/auth/token`,
  //       data: {
  //         refresh_token: localStorage.getItem('refresh_token'),
  //         user_id: 1
  //       }

  //     }).then(({data}) => {
  //       localStorage.setItem('prod_index_user_token', data.access_token);
  //     }).catch((err) => {

  //     })
      
  //   }
  // })
  return (
    <UserContext.Provider value="hello">
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}