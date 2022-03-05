import Head from 'next/head'
import NavBar from '../components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Index: Discovery starts with all </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='header'>
        <div className="container">
          <NavBar />
          <div className="cta-box">
            <h1 className='header-title'>Discovery starts with all</h1>
            <h4 className='header-subtitle'>We are here to foster community-built relationships between clients and businesses.</h4>
            <a href="#" className='btn cta-btn primary-btn'>Join waiting list</a>
            <h5 className='cta-subtitle'> We’ll contact you when we’re launching.</h5>
          </div>
        </div>
        
      </header>
      <section> 
        <div className="container">
          <div className="section-box">
            <h5 className='section-subtitle'>Product Index</h5>
            <h3 className='section-title'>What is this about?</h3>
            <p>
            Before Product Index, finding goods and services locally was an adventure. Relying on friends and family to point you in the right direction is limited by their personal experience. Product Index allows customers to find businesses that are right for them while driving more traffic to businesses that cater to their needs.             </p>
          </div>
        </div>


      </section>
      <section>
          <div className="container">
            <div className="section-box">
              <h5 className='section-subtitle'>Built for you</h5>
              <h3 className='section-title'>Find the perfect business for you</h3>
              <p>Search for what you need and find the business that provides it. Our index of companies allows us to pair you with the perfect fit.</p>
              <div className="img-box">
                <Image src='/images/Search-queries.png' width={600} height={156}></Image>
              </div>
              <h4 className='section-title'>Your voice matters to everyone</h4>
              <p>Let everyone know about your previous experience or find out how others feel. Our review section gives everyone an insight into the business you found.</p>
            </div>
          </div>
      </section>
      <section>
        <div className="container">
          <div className="section-box">
            <h5 className='section-subtitle'>Built for you - too</h5>
            <h3 className='section-title'>Your business deserves to seen</h3>
            <p>Being listed on Product Index, your business will be found if anyone searches for its name, category, product, or service provided.</p>
            <div className="img-box">
              <Image src='/images/highlighted-business.png' width={650} height={505} ></Image>
            </div>

            <h4 className='section-title'>A digital place for your products and services to live</h4>
            <p>Add and manage your inventory with us. Increase your public visibility by doing the things you normally do and nothing more.</p>
            <div className="btn-box">
              <a href="#" className='btn cta-btn primary-btn'>Join waiting list</a>
            </div>


          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section-box">
          <h3 className='section-title'>Have any questions?</h3>
          <p>Email us at hello@theproductindex.io</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Copyright © 2022 Product Index. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .header {
          background-color: #1c1c1c;
          padding: 1.5rem 0;
        }
        .header-title {
          color: #FAFCFC;
          text-align: center;
          max-width: 500px;
          margin: 0 auto;
        }
        .header-subtitle {
          color: #FAFCFC;
          max-width: 700px;
          text-align: center;
          margin-top: .5rem;
          font-weight: 500;
        }
        .cta-box {
          margin: 3rem auto;
          text-align: center;
        }
        .cta-btn {
          padding: 0.75rem 3.5rem;
          font-size: 1.5rem;
          margin-top: 1rem;
          
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
          cursor: pointer;
        }
        .btn:hover {
          transform: translateY(-2px);
        }
        .btn:active {
          transform: scale(.99);
        }
        .cta-subtitle {
          color: white;
          margin-top: .5rem;
        }
        section p {
          line-height: 1.75rem;
          font-size: 1.125rem;
          margin-top: 0.5rem;
        }

        section {
          padding: 2rem 0;
        }

        .section-box {
          margin: 0 auto;
          max-width: 700px;
          
        }
        .btn-box {
          text-align: center;
        }
        .section-title {
          text-align: center;
        }
        .section-subtitle {
          color: #FFBE00;
          text-align: center;
        }

        section h4 {
          margin-top: 2rem;
        }
        section h5 {
          text-transform: uppercase;
        }
        .img-box {
          margin-top: 1rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
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
