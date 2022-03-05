import { useRouter } from 'next/router'
import SearchBar from '../components/searchBar'
import Link from 'next/link'
import { SearchCard } from '../components/cards/SearchCard'
import NavBar from '../components/navbar';

export default function Search() {
    const router = useRouter()
    const { find, near } = router.query // To verify password change

    return (
      <>
      
      <div className="container">
      <NavBar />
      <SearchBar />
        <div className="results-block">
            <h5>Search results: <span className='results'>100</span></h5>
        </div>

        <SearchCard businessName={`Solomon's Flavor`} slug='/store/1' imageSrc={'/'} locationState='Nassau' locationCountry={'The Bahamas'} openStatus='Open' address={'Johnson road'} tags={['Soul food', 'Sandwiches', 'Pizza']} reviewAvg={4.5} reviewCount={100}  />
        <SearchCard businessName={`Solomon's Flavor`} slug='#' imageSrc={'/'} locationState='Nassau' locationCountry={'The Bahamas'} openStatus='Open' address={'Johnson road'} tags={['Soul food', 'Sandwiches', 'Pizza']} reviewAvg={4.5} reviewCount={100}  />
        <SearchCard businessName={`Solomon's Flavor`} slug='#' imageSrc={'/'} locationState='Nassau' locationCountry={'The Bahamas'} openStatus='Open' address={'Johnson road'} tags={['Soul food', 'Sandwiches', 'Pizza']} reviewAvg={4.5} reviewCount={100}  />
        <SearchCard businessName={`Solomon's Flavor`} slug='#' imageSrc={'/'} locationState='Nassau' locationCountry={'The Bahamas'} openStatus='Open' address={'Johnson road'} tags={['Soul food', 'Sandwiches', 'Pizza']} reviewAvg={4.5} reviewCount={100}  />
        <SearchCard businessName={`Solomon's Flavor`} slug='#' imageSrc={'/'} locationState='Nassau' locationCountry={'The Bahamas'} openStatus='Open' address={'Johnson road'} tags={['Soul food', 'Sandwiches', 'Pizza']} reviewAvg={4.5} reviewCount={100}  />
        <SearchCard businessName={`Solomon's Flavor`} slug='#' imageSrc={'/'} locationState='Nassau' locationCountry={'The Bahamas'} openStatus='Open' address={'Johnson road'} tags={['Soul food', 'Sandwiches', 'Pizza']} reviewAvg={4.5} reviewCount={100}  />
        <SearchCard businessName={`Solomon's Flavor`} slug='#' imageSrc={'/'} locationState='Nassau' locationCountry={'The Bahamas'} openStatus='Open' address={'Johnson road'} tags={['Soul food', 'Sandwiches', 'Pizza']} reviewAvg={4.5} reviewCount={100}  />


        <style jsx>{`

            .results {
                font-weight: 400;
            }
            .results-block {
                margin: 2rem 0 1rem 0;
            }

        `}</style>
      </div>

      </>
    )
}