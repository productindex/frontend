import Head from 'next/head'
import NavBar from '../components/navbar'
import Image from 'next/image'
import { TextField } from '../components/textfield'
import { LoginForm } from '../components/forms/loginForm'

export default function Home() {
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
            </div>`
          </div>

        </div>
      </main>

      <footer>
        <p>2022 Product Index. All rights reserved. Designed by AquaUx</p>
      </footer>

      <style jsx>{`
        .auth-screens {
          height: 97vh;
        }
        .auth-screens .side-by-side {
          height: 100%;
        }
        .auth-screens .leftpane  p{
          color: white;
          font-size: 1.2rem;
        }
        .side-by-side {
          display: flex;
          
        }
        .logo-box img{
          width: 162px;
        }
        .logo-box {
          margin-bottom: 1.5rem;
        }

        .leftpane {
          width: 55%;
          padding: 10rem 0 5% 5%;
          background-color: #13C8C4;
        }

        .form-title {
          margin-bottom: 1rem;
        }
        .leftpane .content {
            max-width: 450px;
        }
        .rightpane .content {
          min-width: 450px;
        }

        .rightpane {
          width: 45%;
          padding-right: 5%;
          padding: 6rem 5% 5% 1.5rem;
        }
        .leftpane h2 {
          color: white;
          text-transform: uppercase;
        }
        .primary-btn {
          background-color: #13C8C4;
          color: white;
        }
        .primary-btn:hover {
          background-color: #4BE0DD;
        }
        .primary-btn:active {
          background-color: #2EB7BE;;
        }
        .btn {
          display: inline-block;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.4s;
          border-radius: 2px;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
        .btn:active {
          transform: scale(.99);
        }

        @media (max-width: 850px) {
          .leftpane {
            display: none;
  
            
          }
        }
  
      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Inter', sans-serif;
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
        }
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 1440px;
          padding: 0 5%;
          margin: 0 auto;
        }
        h1 {
          font-size: 4.375rem;
          font-weight: 900;
          color: #1c1c1c;
          
        }
        h2 {
          font-size: 3.4375rem;
          font-weight: 700;
          color: #1c1c1c;
          
        }
        h3 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #1c1c1c;
        }
        h4 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1c1c1c;
        }
        h5 {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1c1c1c;
        }
        h6 {
          font-size: 0.75rem;
          font-weight: 700;
          color: #1c1c1c;
        }
        p {
          color: #5C5C5C;
          font-size: 1.125rem;
        }
        footer {
          background-color: #FAFAFA;
          padding: 1rem 5%; 
        }
        @media (max-width: 450px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  )
}
