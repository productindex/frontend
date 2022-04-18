import '../styles.css'
import { AuthContextProvider } from '../context/AuthContext'
import { InitialPageLayout } from '../components/InitialPageLayout'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <InitialPageLayout>
        <Component {...pageProps} />
      </InitialPageLayout>
    </AuthContextProvider>
  )
}