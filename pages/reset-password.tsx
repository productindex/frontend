import Head from "next/head";
import { ResetPasswordForm } from "@productindex/components/forms/resetPasswordForm";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from 'js-cookie'
import styles from '@productindex/style/authPages.module.css'
import LogoBox from '@productindex/components/bits/LogoBox';

export default function ResetPassword() {
  const router = useRouter();
  useEffect(() => {
    if (Cookies.get('isLoggedIn')) {
      router.replace("/");
    }
  });
  return (
    <>
      <Head>
        <title>Product Index: Create new password</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <div className='fullPage'>
      <main className={`${styles.authScreens} side-by-side`}>
          <div className={styles.leftpane}>
            <div className={styles.content}>
              <h2 className="">Doing business just got easier</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                doloribus unde esse incidunt vitae excepturi, optio tempora
                corporis tempore voluptate.
              </p>
            </div>
          </div>
          <div className={styles.rightpane}>
            <div className={styles.content}>
              <LogoBox />
              <h3 className={styles.formTitle}>Create new password</h3>
              <p>Glad to have you back! Create a new password for your account.</p>
              <ResetPasswordForm />
            </div>
          </div>
      </main>

      <footer>
        <p>2022 Product Index. All rights reserved. Designed by AquaUx</p>
      </footer>
      </div>
    </>
  );
}
