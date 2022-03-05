import Head from 'next/head'
import { LoginForm } from '../components/forms/loginForm'

export default function Signin() {
  return (
    <>
      <Head>
        <title>Product Index: Discovery starts with all </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='auth-screens'>

          <div className="side-by-side">
          <div className="leftpane">
            <div className="content">
              <h2 className=''>Doing business just got easier</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et doloribus unde esse incidunt vitae excepturi, optio tempora corporis tempore voluptate.</p>
            </div>

          </div>
          <div className="rightpane">
            <div className="content">
              <div className="logo-box">
                <img src="/images/logo.png" alt="Product Index Logo" />
              </div>
              <h3 className='form-title'>Sign in</h3>
              <LoginForm />
            </div>
          </div>

        </div>
      </main>

      <footer>
        <p>2022 Product Index. All rights reserved. Designed by AquaUx</p>
      </footer>

      <style jsx>{`

        .logo-box {
          margin-bottom: 1.5rem;
        }
        .leftpane {
          width: 55%;
          padding: 8rem 0 5% 5%;
          background-color: #13C8C4;
          // height: 100%;
        }

        .form-title {
          margin-bottom: 1rem;
        }
        .leftpane .content {
            max-width: 450px;
        }
        .rightpane .content {
          max-width: 450px;
        }

        .rightpane {
          width: 45%;
          padding-right: 5%;
          padding: 4rem 5% 5% 1.5rem;
        }
        .leftpane h2 {
          color: white;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .leftpane {
            display: none;
  
            
          }
          .rightpane {
            width: 100%;
          }
        }
  
      `}</style>
    </>
  )
}
