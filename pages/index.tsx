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
            <h4 className='header-subtitle'>We are here to fostor community built relationships between clients and businesses.</h4>
            <a href="#" className='btn cta-btn btn-primary'>Join waiting list</a>
            <h5 className='cta-subtitle'> We’ll contact you when we’re launching</h5>
          </div>
        </div>
        
      </header>
      <section> 
        <div className="container">
          <div className="section-box">
            <h5 className='section-subtitle'>Product Index</h5>
            <h3 className='section-title'>What is this about?</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem explicabo temporibus provident. Voluptates atque quo facere molestiae odio, quisquam quaerat culpa, perspiciatis tempora velit obcaecati delectus laboriosam aspernatur aliquid. Maiores cum exercitationem magni, tenetur reiciendis alias delectus, soluta eaque, ut quidem enim? Hic fuga totam laborum harum sint nam excepturi minus molestiae, quibusdam ratione labore enim nisi et commodi voluptas veniam repellat nesciunt ad? Illo modi cupiditate nam eveniet aliquam, perspiciatis assumenda repellendus possimus mollitia error esse, temporibus nostrum eius numquam dicta debitis et quae. Impedit ipsa sapiente repellat. Dolorum minima voluptatum sed officia, officiis esse blanditiis quos. Ut, repudiandae.
            </p>
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
              <p>Let everyone know about your last experience or find out how other feels. Our review section gives everyone an insight about the business you found.</p>
            </div>
          </div>
      </section>
      <section>
        <div className="container">
          <div className="section-box">
            <h5 className='section-subtitle'>Built for you - too</h5>
            <h3 className='section-title'>Your business deserves to seen</h3>
            <p>Being listed on Product Index, your business will be found if anyone searches for it’s name, category, product or service provided.</p>
            <div className="img-box">
              <Image src='/images/highlighted-business.png' width={650} height={505} ></Image>
            </div>

            <h4 className='section-title'>A digital place for your products and services to live</h4>
            <p>Add and manage your inventory with us. Increase your public visibility by doing the things you normally do and nothing more.</p>
            <div className="btn-box">
              <a href="#" className='btn cta-btn btn-primary'>Join waiting list</a>
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
        <p>2022 Product Index. All rights reserved. Designed by AquaUx</p>
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
    </>
  )
}
