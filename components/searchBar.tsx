import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router'


export default function SearchBar(props){
    const [findQuery, setFind] = useState('')
    const [locationQuery, setLocation] = useState('')
    const [searchType, setSearchType] = useState('BUSINESS')
    const router = useRouter()

    const handleSubmit = (e : any) => {
        e.preventDefault()
        router.push({pathname: '/search', query: {find: findQuery, near: locationQuery, type: searchType}})
    }
    return (
        <div className='search'>
            
            <div className="search-filter">
                <div className={`search-filter-title ${props.dark && 'dark'}`}> Looking for:</div>
                <button className={`option`} id={`${searchType == 'BUSINESS' && 'active-selection'}`} onClick={()=> {setSearchType('BUSINESS')}}>Business</button>
                <button className={`option `} id={`${searchType == 'ITEM' && 'active-selection'}`} onClick={()=> {setSearchType('ITEM')}}>Item</button>
                <button className={`option`} id={`${searchType == 'SERVICE' && 'active-selection'}`} onClick={()=> {setSearchType('SERVICE')}}>Service</button>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="searchbox">

                <div className="search-field">
                    <label htmlFor="find" className='search-label'>Find</label>
                    <input type="text" name="Search" id="find" className='searchbar' placeholder={`Try searching for 'Food'`} onChange={(e: any)=> setFind(e.target.value)}/>

                </div>
                <div className="search-field">
                    <label htmlFor="find" className='search-label'>Location</label>
                    <input type="text" name="Search" id="Search" className='searchbar' placeholder={`Try searching for 'Food'`} onChange={(e: any)=> setLocation(e.target.value)}/>

                </div>
                <button type='submit' className="btn-primary btn btn-search"><div><img src='/images/Search.svg' width={'24px'} height={'24px'} /></div><div className='search-word'>Search</div></button>

 
            </div>

            </form>
            
            <style jsx>{`
            #active-selection {
                background-color: #E7E7E7;
                color: inherit;
            }
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
            .search-field {
                width: 100%;
            }
            .searchbar {
                transition: .8s;
                min-width: 200px;
                min-width: 200px;
                width: 100%;
            }
            .searchbar:focus {
                box-shadow: 0px 0px 2px 2px #B8EEED;
                outline: none;
                transition: .8s;
            }
            .searchbar::placeholder {
                color: #CACACA;
            }
            .searchbox {
                display: flex;
                column-gap: 4px;
                justify-content: center;
                
            }

            .search-filter {
                display: flex;
                column-gap: 2px;
                margin-bottom: .5rem;
                align-items: center;
                justify-content: center;
                
            }
            .option {
                padding: 12px 12px;
                border-radius: 2px;
                cursor: pointer;
                border: 0;
                background-color: transparent; 
                font-size: 1rem;
                transition: all 0.4s;
                ${props.dark && 'color: white'};
            }
            .option:hover {
                background-color: #F4F4F4;
                ${props.dark && 'color: inherit'}
            }
            .search-filter-title {
                font-weight: 700;
                margin-right: 8px;
            }
            .btn-search {
                border: 0;
                padding: 1rem;
            }
            .dark {
                color: white;
            }
            .search-word {
                display: none;
            }
            @media (max-width: 450px) {
                .nav {
                    flex-wrap: wrap;
                    flex: 1 1 100%;
                }
                .search-filter {
                    order: 5;
                    flex-grow: 1;
                }
                .searchbox {
                    display: block;
                }
                .search-field:not(:last-child) {
                    margin-bottom: .5rem;
                }
                .btn-search {
                    width: 100%;
                    padding: .5rem;
                }
                .navigation {
                    padding-bottom: 0;
                }
                .btn-search {
                    border: 0;
                    padding: .875rem;
                    display: flex;
                    justify-content: center;
                }
                .search-word {
                    line-height: 1.75rem;
                    font-size: 1rem;
                    margin-left: .5rem;
                    display: inline-block;
                }

            }
           
        `}</style>
        </div>
        
    )
}