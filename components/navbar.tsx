import Link from 'next/link'
import Image from 'next/image'

export default function NavBar(){
    return (
        <div className='logo-box'>
            <Link href='/'>
                <img src="/images/logo.png" alt="Product Index Logo" />

            </Link>
            <style jsx>{`
                .logo-box {
                    float: left;
                }
                .logo-box img {
                    width: 162px;
                    cursor: pointer;
                }
        `}</style>
        </div>
        
    )
}

