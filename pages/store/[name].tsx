import ProductListBox from "@productindex/components/Boxes/ProductListBox";
import { Tag } from "@productindex/components/tag";
import FullNavBar from "@productindex/components/Navigation/FullNavBar";
import { useState, useEffect } from "react";
import Head from "next/head";
import { EmptyStateMessages } from "@productindex/const/errors";
import { StoreApi } from "@productindex/api/store";
import { useRouter } from "next/router";
import { ReviewsApi } from "@productindex/api/review";

import  BusinessContactCard  from '@productindex/components/cards/BusinessContactCard';
import BusinessStoreHoursCard from '@productindex/components/cards/BusinessStoreHoursCard';
import BusinessAddressCard from "@productindex/components/cards/BusinessAddressCard";
import ReviewsBox from "@productindex/components/Boxes/ReviewsBox";
import StorePortfolio from '@productindex/components/StorePortfolio/StorePortfolio';

export default function BusinessStore() {
  const router = useRouter();
  useEffect(() => {
    loadStoreInfo();
  }, [router.query.name]);

  const loadStoreInfo = async () => {
    const { data : storeData }  = await StoreApi.getStoreInfo(
      0,
      router.query.name
    );
      if (storeData) {
        const { data: businessData } = await StoreApi.getBusinessInfo(
          storeData["business_id"]
        );
        const { data: reviewData } = await ReviewsApi.getStoreReviews(
          storeData["id"]
        );
        const { data: inventoryData } = await StoreApi.getStoreInventory(
          storeData["id"]
        );
      
      const hours = storeData["StoreHour"] || null;
      const contactInfo = storeData["StoreContact"];

      setBusinessName(businessData["business_name"]);
      setBusinessDescription(businessData["description"]);
      setTags(buildBusinessTags(businessData["BusinessTags"]));
      setCategory(businessData["category"]);
      setCity(storeData["city"]);
      setCountry(storeData["country"]);
      setState(storeData["state"]);
      setReviews(reviewData);
      setStoreData(storeData);
      setBusinessHours(hours);
      setBusinessContact(contactInfo);
      setProducts(inventoryData)
    }
  };

  const [storeData, setStoreData] = useState(null);
  const [businessName, setBusinessName] = useState(`No Business Name`);
  const [tags, setTags] = useState(["Unavailable", "Unavailable", "Unavailable"]);
  const [businessDescription, setBusinessDescription] = useState('');
  const [businessHours, setBusinessHours] = useState(null);
  const [businessContact, setBusinessContact] = useState(null);
  const [products, setProducts] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [businessCategory, setCategory] = useState("");
  const [city, setCity] = useState("Nassau");
  const [country, setCountry] = useState("The Bahamas");
  const [state, setState] = useState("New Providence");
  const tagList = tags.toString().replace(/,/g, ", ");

  const buildBusinessTags = (tags) => {
    const tagList = [];
    for (let i = 0; i < tags.length; i++) {
      tagList.push(tags[i].tag);
    }
    return tagList;
  };
  return (
    <>
      <Head>
        <title>{businessName} : Product Index </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={businessDescription}></meta>
        <meta
          name="keywords"
          content={`${tagList}, ${businessCategory}, ${city}, ${country}, ${state}`}
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
        
      <main>
        <div className="product-container">
          <FullNavBar />
          <StorePortfolio imageUrls={[]} />
          <div className="store-content">
            <div className="main-content">
              <h4 className="business-name">
                {businessName
                  ? businessName
                  : EmptyStateMessages.businessStoreName}
              </h4>
              <div className="tag-box">
                {tags.map((tag) => (
                  <Tag description={tag} key={tag}/>
                ))}
              </div>
              <p className="description">
                {businessDescription ? businessDescription : "No description for this business"}
              </p>
              <div className="mobileOnly">
                <BusinessStoreHoursCard businessStoreHours={businessHours}/>
                <BusinessContactCard contactInfo={businessContact}/>
                <BusinessAddressCard addressInfo={storeData}/> 
              </div>
              <ProductListBox products={products}/>

              <section className="review-section">
              <ReviewsBox reviews={reviews}/>
              </section>
            </div>

            <div className="side-bar">
              <BusinessStoreHoursCard businessStoreHours={businessHours}/>
              <BusinessContactCard contactInfo={businessContact}/>
              <BusinessAddressCard addressInfo={storeData}/>
            </div>
          </div>
        </div>
      </main>
      

      <footer>
        <p>2022 Product Index. All rights reserved. Designed by AquaUx</p>
      </footer>

      <style>{`
        .store-photo {
          background-color: pink;
          height: 250px;
          flex-grow: 1;
        }
        .item-title {
          display: inline-block;
          letter-spacing: 0.5px;
          color: #1C1C1C;
          font-weight: 700;

        }
        .photogrid {
          display: flex;
          column-gap: 0.5rem;
        }
        .description {
          font-size: 1rem;
          line-height: 1.5rem;
          margin-top: 1rem;
        }

        .tag-box {
          margin-top: 0.5rem;
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
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
          margin-top: 0.25rem;
          color: #5c5c5c;
          font-size: 0.875rem;
        }
        .business-contact {
          margin-top: 1rem;
        }
        .side-bar {
          width: 25%;
        }
        .side-bar .card {
          
          border: 1.5px solid #e5e9e8;
          border-radius: 2px;
          padding: 1rem;
        }
        .card {
          margin-top: 0.5rem;
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
          border-top: 1.5px solid #e5e9e8;
          margin: 2.5rem 0;
          padding-top: 2rem;
        }
        .card h5 {
          margin-bottom: 0.5rem;
        }
        .error {
          color: #c60000;
          font-weight: 700;
        }
        .empty-box {
          background-color: #f4f4f4;
          text-align: center;
          height: 200px;
          justify-content: center;
          align-items: center;
          display: flex;
        }

        .yourReview {
          margin-bottom: 2rem;
        }
        .mobileOnly {
          display: none;
        }

        @media (max-width: 450px) {
          .side-bar {
            display: none;
          }
          .mobileOnly {
            display: block;
          }
          .main-content {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
