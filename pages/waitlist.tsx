import { Widget } from '@typeform/embed-react'
import Head from 'next/head';

export default function MyPage() { 

  return (
      <>
        <Head>
            <title>Product Index: Join our waiting list! </title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <Widget id="Sl4uxm8K" style={{ width: '100%' , height: '100vh'}} className="my-form" />
      </>
  )
  
}