import ProductListBox from "@productindex/components/Boxes/ProductListBox";
import { ReviewCard } from "@productindex/components/cards/ReviewCard";
import { Tag } from "@productindex/components/tag";
// import SearchBar from "../../components/searchBar";
import FullNavBar from "@productindex/components/Navigation/FullNavBar";
import { useState, useEffect } from "react";
import Head from "next/head";
import { EmptyStateMessages } from "@productindex/const/errors";
import { StoreApi } from "@productindex/api/store";
import { useRouter } from "next/router";
import { ReviewsApi } from "@productindex/api/review";
import contextTime from '@productindex/util/contextTime'
import { TextArea } from "@productindex/components/formElements/TextArea";
import ReportReviewModel from "@productindex/components/modals/ReportReviewModel";
import  BusinessContactCard  from '@productindex/components/cards/BusinessContactCard';
import BusinessStoreHoursCard from '../../components/cards/BusinessStoreHoursCard';
import BusinessAddressCard from "@productindex/components/cards/BusinessAddressCard";
import ReviewsBox from "@productindex/components/Boxes/ReviewsBox";

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

  const [storeData, setStoreData] = useState({});
  const [businessName, setBusinessName] = useState(`No Business Name`);
  const [tags, setTags] = useState(["Unavailble", "Unavailble", "Unavailble"]);
  const [businessDescription, setBusinessDescription] = useState('');
  const [businessHours, setBusinessHours] = useState(null);
  const [businessContact, setBusinessContact] = useState(null);
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [businessCategory, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
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
        ></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <body>
        
      
      <main>
        <div className="product-container">
          <FullNavBar />
          <div className="photogrid">
            <div className="store-photo">1</div>
            <div className="store-photo">2</div>
            <div className="store-photo">3</div>
            <div className="store-photo">4</div>
          </div>
          <div className="store-content">
            <div className="main-content">
              <h4 className="business-name">
                {" "}
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
      </body>

      <style>{`
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
          column-gap: 0.5rem;
        }
        .description {
          font-size: 1rem;
          line-height: 1.5rem;
          margin-top: 1rem;
        }

        .tag-box {
          margin-top: 0.5rem;
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
          margin-top: 0.5rem;
          border: 1.5px solid #e5e9e8;
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
          line-height: 200px;
        }
        .yourReview {
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
}
