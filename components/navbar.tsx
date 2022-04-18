import Link from 'next/link'
import { AvatarMenu } from '../components/pieces/AvatarMenu';
export default function NavBar(props){
    return (
        <div className='navigation'>
            <div className="nav">
                <div className='logo-box'>
                    <Link href='/'>
                        {
                            props.dark ?
                            <img src="/images/logo-light.png" alt="Product Index Logo" />
                            : <img src="/images/logo-dark.png" alt="Product Index Logo" />
                        }
                        
                    </Link>
                </div>
                {props.dark? <AvatarMenu dark /> : <AvatarMenu />}
            </div>


            <style jsx>{`
                .logo-box img {
                    width: 162px;
                    cursor: pointer;
                    z-index: 1000;
                }
                .nav {
                    display: flex;
                    justify-content: space-between;
                }
                .avatar-photo img{
                    height: 44px;
                    width: 44px;
                    border-radius: 44px;
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    border: 1.5px solid #E5E9E8;
                }
                .avatar-name {
                    color: white;
                    line-height: 40px;
                }
                .avatar-photo:hover {
                    cursor: pointer;
                }
    
                .navigation {
                    padding: 1.5rem 0;
                }
                .user-menu {
                    background-color: white;
                    width: 200px;
                    border-radius: 2px;
                    padding: .5rem 0;
                    top: 4.5rem;
                    right: 5.5rem;
                    position: absolute;
                    display: none;
                }
                .avatar {
                    transition: all 1s;
                }
                .avatar:hover .user-menu {
                    display: block;
                }
                .menu-option {
                    padding: .5rem .5rem;
                }
                .menu-option:hover {
                    background-color: #F4F4F4;
                    cursor: pointer;
                }
                .menu-option a {
                    text-decoration: none;
                    color: #1c1c1c;
                    font-size: 1rem;
                }

        `}</style>
        </div>
        
    )
}

