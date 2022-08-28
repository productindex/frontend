import "../styles.css";
import { useEffect, useState } from "react";
import { AuthContextProvider } from "../context/AuthContext";
import { InitialPageLayout } from "../components/InitialPageLayout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRouter } from 'next/router';
import LoadingPage from '../components/LoadingPage';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  function Loading() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    useEffect(() => {
      
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setLoading(false);
  
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError',  handleComplete)
  
        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    
    return loading && (
      <div><LoadingPage /></div>
      
    )
  }

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
          theme="colored"
        />
        <Loading />
        <Component {...pageProps} />
      </InitialPageLayout>
    </AuthContextProvider>
  );
}
