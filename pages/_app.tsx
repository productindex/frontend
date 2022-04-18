import '../styles.css'
import { AuthContextProvider } from '../context/AuthContext'
import { InitialPageLayout } from '../components/InitialPageLayout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  return (
    <AuthContextProvider>
      <InitialPageLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
        <Component {...pageProps} />
      </InitialPageLayout>
    </AuthContextProvider>
  )
}