import Link from 'next/link'

export default function NavBar(){
    const displayPhotoSrc = ''
    return (
        <div className='nav'>
            <div className='logo-box'>
                <Link href='/'>
                    <img src="/images/logo.png" alt="Product Index Logo" />
                </Link>
            </div>
            <div className='avatar'> 
                <div className='avatar-photo' >
                    <img src={!displayPhotoSrc? '/images/Default-person.png' : displayPhotoSrc} />
                </div>
            </div>

            <style jsx>{`
                .logo-box {
                    margin-right: auto;
                }
                .logo-box img {
                    width: 162px;
                    cursor: pointer;
                }
                .nav {
                    display: flex;
                }
                .avatar-photo img{
                    height: 44px;
                    width: 44px;
                    border-radius: 100px;
                    border: 1.5px solid #E5E9E8;
                }
                .avatar-name {
                    color: white;
                    line-height: 40px;
                }
                .avatar:hover {
                    cursor: pointer;
                }
        `}</style>
        </div>
        
    )
}

