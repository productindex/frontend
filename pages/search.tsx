import { useRouter } from 'next/router'
import SearchBar from '../components/searchBar'
import Link from 'next/link'
import { SearchCard } from '../components/cards/SearchCard'
import NavBar from '../components/navbar';
import { useState, useContext } from 'react';
import FullNavBar from "../components/FullNavBar";

export default function Search() {
    const router = useRouter()
    const { find, near, type } = router.query // To verify password change

    const testStore = { name: 'Solomon\'s Flavor', handle: 'sol-flavor', imgSrc:'/', city: 'Nassau', country: 'The Bahamas', openingTime:'09:05:00', closingTime:'19:05:00', address:'21 Johnson Road, Fox Hill', avgRatings: 4.8, reviewCount: 100, tags: ['Pizza', 'Chicken', 'Waffles'], displayImg: ''}

    const [stores, setStores] = useState([testStore])
    
    return (
        
      <>
      
      <div className="product-container">
      <FullNavBar />
      
      
        <div className="results-block">
            { stores.length > 0 ? <h5>Search results: <span className='results'>{stores.length}</span></h5> :  <h5>No results found for: <span className='results'>{find} in {near}</span></h5>}
        </div>

        { 
        stores.length >0 &&
        stores.map(store => <SearchCard businessName={store.name} slug={`/store/${store.handle}`} imageSrc={store.displayImg} locationState={store.city} locationCountry={store.country} openingTime={store.openingTime} closingTime={store.closingTime} address={store.address} tags={store.tags} reviewAvg={store.avgRatings} reviewCount={store.reviewCount}  />)  
        }

        <style jsx>{`

            .results {
                font-weight: 400;
            }
            .results-block {
                margin: 2rem 0 1rem 0;
            }
            .product-container {
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                max-width: 1440px;
                padding: 0 5%;
                margin: 0 auto;
                }
        `}</style>
      </div>

      </>
    )
}