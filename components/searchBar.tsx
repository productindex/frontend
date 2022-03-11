import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';

export default function SearchBar(){
    const [findQuery, setFind] = useState('')
    const [locationQuery, setLocation] = useState('')
    return (
        <div className='search'>
            <div className="search-filter">
                <div className="search-filter-title">Looking for:</div>
                <div className="option">Item</div>
                <div className="option">Service</div>
                <div className="option">Business</div>
            </div>
            <div className="searchbox">

                <div className="search-field">
                    <label htmlFor="find" className='search-label'>Find</label>
                    <input type="text" name="Search" id="find" className='searchbar' placeholder={`Try searching for 'Food'`} onChange={(e: any)=> setFind(e.target.value)}/>

                </div>
                <div className="search-field">
                    <label htmlFor="find" className='search-label'>Location</label>
                    <input type="text" name="Search" id="Search" className='searchbar' placeholder={`Try searching for 'Food'`} onChange={(e: any)=> setLocation(e.target.value)}/>

                </div>
            <Link href={{
                pathname: '/search', 
                query: {find: findQuery, near: locationQuery}
                }}>
            <button className="btn-primary btn btn-search" onClick={()=>{console.log('Clicked!')}}><Image src='/images/Search.svg' width={24} height={24}/></button>
                
            </Link>
            </div>

            
            
            <style jsx>{`
            .searchbar {
                padding: 1.75rem 1rem 0.5rem 1rem;
                border: 1.5px solid #E5E9E8;
                color: #5C5C5C;
                font-size: 1.125rem;
                min-width: 12.5rem;
                border-radius: 2px;
            }
            .search-label {
                font-weight: 700;
                font-size: 14px;
                position: absolute;
                transform: translate(16px, 8px);
                color: #1c1c1c;
                
            }
            .searchbar {
                transition: .8s;
                width: 200px;
            }
            .searchbar:focus {
                box-shadow: 0px 0px 2px 2px #B8EEED;
                outline: none;
                width: 400px;
                transition: .8s;
            }
            .searchbar::placeholder {
                color: #CACACA;
            }
            .searchbox {
                display: flex;
                column-gap: 4px;
            }

            .search-filter {
                display: flex;
                column-gap: 2px;
                margin-bottom: .5rem;
                align-items: center;
            }
            .option {
                padding: 12px 12px;
                border-radius: 2px;
                cursor: pointer;
            }
            .search-filter-title {
                font-weight: 700;
                margin-right: 8px;
            }
            .btn-search {
                border: 0;
                padding: 1rem;
            }
            .search{
            }
        `}</style>
        </div>
        
    )
}