import { ProductCard } from "../../components/cards/ProductCard";
import { ReviewCard } from "../../components/cards/ReviewCard";
import { Tag } from "../../components/tag";
import SearchBar from "../../components/searchBar";
import { useState } from 'react';


export default function BusinessStore() {
  const [businessName, setBusinessName] = useState(`No Business Name`)
  const [tags, setTags] = useState(['Soul Food', 'Chicken', 'Pizza']);
  const [businessDescription, setBusinessDescription] = useState(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores velit rerum eum aliquid exercitationem nam mollitia, saepe sunt dicta consequatur aut, alias odit. Consequatur repellendus iure rerum odio placeat perspiciatis nisi ab ad, rem magni soluta dolore qui accusantium dolor nihil libero architecto aperiam cumque obcaecati accusamus iusto odit consectetur?`)
  const [businessHours, setBusinessHours] = useState({Monday: '09:00AM - 05:00PM', Tuesday: '09:00AM - 05:00PM', Wednesday: '09:00AM - 05:00PM', Thursday: '09:00AM - 05:00PM', Friday: '09:00AM - 05:00PM', Saturday: '09:00AM - 05:00PM', Sunday: '09:00AM - 05:00PM'})
  const [businessContact, setBusinessContact] = useState( {phoneOne: '(242) 123 - 4567', phoneTwo: '(242) 123 - 4567', email_address: 'me@example.com'})
  const [businessDirections, setBusinessDirections] = useState('')
  const [products, setProducts] = useState([{name: "Product name", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum unde beatae blanditiis alias officia ullam praesentium eius, explicabo corrupti.", price: '17.00'}])
  const [reviews, setReviews] = useState([{}])

  return (
    <>
      <main>
        <div className="product-container">
          <SearchBar />
          <div className="photogrid">
            <div className="store-photo">1</div>
            <div className="store-photo">2</div>
            <div className="store-photo">3</div>
            <div className="store-photo">4</div>
          </div>
          <div className="store-content">
            <div className="main-content">
              <h4 className='business-name'> {businessName ? businessName : 'No Business Name'}</h4>
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
                
               : <div className='empty-box'> No Products or Services listed for this business</div>
              }
              </div>
              <section className="review-section">
                <h4>What people are saying</h4>
          <div className="review-section-box">
            {   reviews.length > 0 ?
              <ReviewCard personName='Tammy Taylor' starRatings={1} reviewDate='Yesterday at 8pm' comments='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore inventore nulla laudantium nisi consequuntur odit doloribus iste, repudiandae obcaecati! Nam voluptate voluptates tenetur quidem quas magnam tempora pariatur incidunt dignissimos quo in sunt itaque modi obcaecati animi labore hic necessitatibus iure consequuntur placeat esse, rem eum ipsum? Voluptate, excepturi fugiat?'/>
            : <div className='empty-box'> No Reviews left as yet. Be the first one!</div>
            }            
          </div>
        </section>
          </div>

            <div className="side-bar">
              <div className="card">
                <h5>Business Hours</h5>
                <ul>
                  <li><span className='item-title'>Mon:</span> {businessHours.Monday ? businessHours.Monday: <span className='error'>Closed</span>}</li>
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
                  {businessContact.phoneOne && <li><span className='item-title'>Phone 1: </span> {businessContact.phoneOne}</li>}
                  {businessContact.phoneTwo && <li><span className='item-title'>Phone 2: </span> {businessContact.phoneTwo}</li>}
                  {businessContact.email_address && <li><span className='item-title'>Email: </span> {businessContact.email_address}</li> }
                </ul> 
                : <p className='description'> No contact info </p>
                }
              </div>
              <div className="card">
                <h5>Directions</h5>
                <p>{businessDirections ? businessDirections : 'No directions available'}</p>
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
