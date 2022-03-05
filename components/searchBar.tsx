import Link from 'next/link'
import { useState } from 'react';

export default function SearchBar(){
    const [searchQuery, setSearch] = useState('')
    return (
        <div>
            <input type="text" name="Search" id="Search" className='searchbar' placeholder={`Try searching for 'Food'`} onChange={(e: any)=> setSearch(e.target.value)}/>
            <Link href={{
                pathname: '/search', 
                query: {find: searchQuery, near: 'me'}
                }}>
            Search
                
            </Link>
            
            
            <style jsx>{`
            .searchbar {
                width: 80%;
                padding: 1rem 1rem;
                border: 1.5px solid #E5E9E8;
                -webkit-box-shadow: inset 0px 4px 6px rgba(58, 58, 58, 0.05);
                box-shadow: inset 0px 4px 6px rgba(58, 58, 58, 0.05);
                color: #5C5C5C;
                font-size: 1.125rem;
                min-width: 12.5rem;
                margin: 1rem 0;
            }
            .searchbar:focus {
                box-shadow: 0px 0px 2px 2px #B8EEED;
                outline: none;
            }
            .searchbar::placeholder {
                color: #CACACA;
            }
        `}</style>
        </div>
        
    )
}