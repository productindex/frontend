import { ProductCard } from "../../components/cards/ProductCard";
import { ReviewCard } from "../../components/cards/ReviewCard";
import { Tag } from "../../components/tag";
// import SearchBar from "../../components/searchBar";
import FullNavBar from "../../components/FullNavBar";
import { useState, useEffect } from 'react';
import Head from "next/head";
import { EmptyStateMessages } from "../../const/errors";
import { StoreApi } from "../../api/store";
import { useRouter } from "next/router";
import { ReviewsApi } from '../../api/review';


export default function BusinessStore() {
  const router = useRouter()
  useEffect(()=> {
    loadStoreInfo()
  }, [router.query.name])

  const loadStoreInfo = async () => {
    const { data : storeData} = await StoreApi.getStoreInfo(0, router.query.name)
    const { data : businessData } = await StoreApi.getBusinessInfo(storeData['business_id'])
    const { data : reviewData } = await ReviewsApi.getStoreReviews(storeData['id'])
    const { data : inventoryData } = await StoreApi.getStoreInventory(storeData['id'])
    
    const hours = storeData['StoreHour'] || null
    const contactInfo = storeData['StoreContact']

    setBusinessName(businessData['business_name'])
    setBusinessDescription(businessData['description'])
    setTags(buildBusinessTags(businessData['BusinessTags']))
    setCategory(businessData['category'])
    setCity(storeData['city'])
    setCountry(storeData['country'])
    setState(storeData['state'])
    setReviews(reviewData)

    setStoreData(storeData)
    setBusinessHours(buildStoreHours(hours))
    setBusinessContact(buildStoreContact(contactInfo))
  }

  const [storeData, setStoreData] = useState({})
  
  const [businessName, setBusinessName] = useState(`No Business Name`)
  const [tags, setTags] = useState(['Soul Food', 'Chicken', 'Pizza']);
  const [businessDescription, setBusinessDescription] = useState(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores velit rerum eum aliquid exercitationem nam mollitia, saepe sunt dicta consequatur aut, alias odit. Consequatur repellendus iure rerum odio placeat perspiciatis nisi ab ad, rem magni soluta dolore qui accusantium dolor nihil libero architecto aperiam cumque obcaecati accusamus iusto odit consectetur?`)
  const [businessHours, setBusinessHours] = useState({Monday: null, Tuesday: null, Wednesday: null, Thursday: null, Friday: null, Saturday: null, Sunday: null})
  const [businessContact, setBusinessContact] = useState(null)
  const [products, setProducts] = useState([{name: "Product name", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum unde beatae blanditiis alias officia ullam praesentium eius, explicabo corrupti.", price: '17.00', img: ''}])
  const [reviews, setReviews] = useState([{}])
  const [businessCategory, setCategory] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const tagList = tags.toString().replace(/,/g, ', ')


  const buildStoreHours = (hours) => {
      //TODO: Move this to a util function
    if (!hours) return {Monday: null, Tuesday: null, Wednesday: null, Thursday: null, Friday: null, Saturday: null, Sunday: null}
    return {
      Monday: hours['monday_open']? `${hours['monday_open']} - ${hours['monday_closed']}` : null,
      Tuesday: hours['tuesday_open']? `${hours['tuesday_open']} - ${hours['tuesday_closed']}` : null,
      Wednesday: hours['wednesday_open']? `${hours['wednesday_open']} - ${hours['wednesday_closed']}` : null,
      Thursday: hours['thursday_open']? `${hours['thursday_open']} - ${hours['thursday_closed']}` : null,
      Friday: hours['friday_open']? `${hours['friday_open']} - ${hours['friday_closed']}` : null,
      Saturday: hours['saturday_open']? `${hours['saturday_open']} - ${hours['saturday_closed']}` : null,
      Sunday: hours['sunday_open']?`${hours['sunday_open']} - ${hours['sunday_closed']}` : null
    }
  }

  const buildStoreContact = (contact) => {
    //TODO: Move this to a util function
    return {
      PhoneOne: contact['phone'],
      PhoneTwo: contact['phone_2'],
      PhoneThree: contact['phone_3'],
      Instagram: contact['instagram_url'],
      Facebook: contact['facebook_url'],
      Twitter: contact['twitter_url'],
      Website: contact['business_website'],
      Email: contact['email']
    }
  }

  const buildBusinessTags = (tags) => {
    const tagList = []
    for (let i = 0; i< tags.length; i++) {
      tagList.push(tags[i].tag)
    }
    return tagList
  }
  return (
    
    <>
      <Head>
            <title>{businessName} : Product Index </title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content={businessDescription}></meta>
            <meta name="keywords" content={`${tagList}, ${businessCategory}, ${city}, ${country}, ${state}`}></meta>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <main>
        <div className="product-container">
          <FullNavBar/>
          <div className="photogrid">
            <div className="store-photo">1</div>
            <div className="store-photo">2</div>
            <div className="store-photo">3</div>
            <div className="store-photo">4</div>
          </div>
          <div className="store-content">
            <div className="main-content">
              <h4 className='business-name'> {businessName ? businessName : EmptyStateMessages.businessStoreName}</h4>
              <div className="tag-box">
                {tags.map(tag => <Tag description={tag}/>)}
              </div>
              <p className="description">
                {businessDescription ? businessDescription : '-'}
              </p>
              <div className="product-list">
              {       
                products.length > 0 ?    
                products.map(product => <ProductCard productName={product.name} description={product.description} price={product.price} photoSrc={product.img}/>)
                
               : <div className='empty-box'> {EmptyStateMessages.noProductsOrServices}</div>
              }
              </div>
              <section className="review-section">
                <h4>What people are saying</h4>
          <div className="review-section-box">
            {   reviews.length > 0 ?
            reviews.map(review => <ReviewCard personName={`${review['User']['first_name']} ${review['User']['last_name']}`} starRatings={review['rating_number']} reviewDate='Yesterday at 8pm' comments={review['comment']}/>)
            : <div className='empty-box'> {EmptyStateMessages.reviews}</div>
            }            
          </div>
        </section>
          </div>

            <div className="side-bar">
              <div className="card">
                <h5>Business Hours</h5>
                <ul>
                  <li><span className='item-title'>Mon:</span> {businessHours['Monday'] ? businessHours['Monday']: <span className='error'>Closed</span>}</li>
                  <li><span className='item-title'>Tues:</span> {businessHours.Tuesday ? businessHours.Tuesday : <span className='error'>Closed</span>}</li>
                  <li><span className='item-title'>Wed:</span> {businessHours.Wednesday ? businessHours.Wednesday : <span className='error'>Closed</span>}</li>
                  <li><span className='item-title'>Thurs:</span> {businessHours.Thursday ? businessHours.Thursday : <span className='error'>Closed</span>}</li>
                  <li><span className='item-title'>Fri:</span> {businessHours.Friday ? businessHours.Friday : <span className='error'>Closed</span>}</li>
                  <li><span className='item-title'>Sat:</span> {businessHours.Saturday ? businessHours.Saturday : <span className='error'>Closed</span>}</li>
                  <li><span className='item-title'>Sun:</span> {businessHours.Sunday ? businessHours.Sunday : <span className='error'>Closed</span>}</li>
                </ul>
              </div>
              <div className="card">
                <h5>Contact Us</h5>
                {businessContact?            
                <ul>
                  {/* TODO: Add social media icons or a link mask (eg. 'Visit page' link) instead of raw links */}
                  {businessContact.PhoneOne && <li><span className='item-title'>Phone 1: </span> {businessContact.PhoneOne}</li>}
                  {businessContact.PhoneTwo && <li><span className='item-title'>Phone 2: </span> {businessContact.PhoneTwo}</li>}
                  {businessContact.PhoneThree && <li><span className='item-title'>Phone 3: </span> {businessContact.PhoneThree}</li>}
                  {businessContact.Email && <li><span className='item-title'>Email: </span> {businessContact.Email}</li> }
                  {businessContact.Instagram && <li><span className='item-title'>Instagram: </span> {businessContact.Instagram}</li> }
                  {businessContact.Facebook && <li><span className='item-title'>Facebook: </span> {businessContact.Facebook}</li> }
                  {businessContact.Twitter && <li><span className='item-title'>Twitter: </span> {businessContact.Twitter}</li> }
                  {businessContact.Website && <li><span className='item-title'>Website: </span> {businessContact.Website}</li> }
                </ul> 
                : <p className='description'> No contact info </p>
                }
              </div>
              <div className="card">
                <h5>Address</h5>
                <p>{storeData['address_line_1'] ? storeData['address_line_1'] : EmptyStateMessages.directionsInfo}</p>
                {/* <p>{storeData['address_line_2'] ? storeData['address_line_2'] : EmptyStateMessages.directionsInfo}</p> */}
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer>
        <p>2022 Product Index. All rights reserved. Designed by AquaUx</p>
      </footer>

      <style jsx>{`
        .store-photo {
          background-color: pink;
          height: 250px;
          flex-grow: 1;

        }
        .item-title {
          display: inline-block;
          font-weight: 700;
        }
        .photogrid {
          display: flex;
          column-gap: .5rem;
        }
        .description {
          font-size: 1rem;
          line-height: 1.5rem;
          margin-top: 1rem;
        }

        .tag-box {
          margin-top: .5rem;
        }
        .main-content {
          width: 75%;
        }
        .store-content {
          display: flex;
          margin-top: 2rem;
          column-gap: 2rem;
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin-top: .25rem;
          color: #5C5C5C;
          font-size: 0.875rem;
        }
        .business-contact {
          margin-top: 1rem;
        }
        .side-bar {
          width: 25%;
        }
        .side-bar .card {
          margin-top: .5rem;
          border: 1.5px solid #E5E9E8;
          border-radius: 2px;
          padding: 1rem;
        }
        .product-container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 1200px;
          padding: 0 5%;
          margin: 0 auto;
        }
        .product-list {
          margin: 2rem 0 1rem 0;
        }
        .review-section-box {
          margin-top: 1.5rem;
        }
        .review-section {
          border-top: 1.5px solid #E5E9E8;
          margin: 2.5rem 0;
          padding-top: 2rem;

        }
        .card h5 {
          margin-bottom: .5rem;
        }
        .error {
          color: #C60000;
          font-weight: 700;
        }
        .empty-box {
          background-color: #F4F4F4;
          text-align: center;
          height: 200px;
          justify-content: center;
          line-height: 200px;
        
        }


      `}</style>
    </>
  )
}
