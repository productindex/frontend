import Link from 'next/link'

export default function NavBar(){
    return (
        <div className='logo-box'>
            <Link href='/'>
                <img src="/images/logo.png" alt="Product Index Logo" />

            </Link>
            <style jsx>{`
                .logo-box {
                    margin-right: auto;
                }
                .logo-box img {
                    width: 200px;
                    cursor: pointer;
                }
        `}</style>
        </div>
        
    )
}

