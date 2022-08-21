import { useRouter } from "next/router";
import { SearchCard } from "@productindex/components/cards/SearchCard";
import { useState, useEffect } from "react";
import FullNavBar from "@productindex/components/Navigation/FullNavBar";
import Head from "next/head";
import { StoreApi } from "@productindex/api/store";

export default function Search() {
  const router = useRouter();
  const { find, near, type } = router.query; 
  const [stores, setStores] = useState([]);

  useEffect(()=> {
    StoreApi.searchForStore(find, near, type).then((data) => {
      setStores(data.data)
    })
  }, [])
  return (
    <>
      <Head>
        <title>Product Index{find && near && `: ${find} in ${near}`} </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <div className="product-container">
        <FullNavBar />
        {/* <CollapseSearchBar /> */}

        <div className="results-block">
          {stores?.length > 0 ? (
            <h5>
              Search results: <span className="results">{stores?.length}</span>
            </h5>
          ) : (
            <h5>
              No results found for:{" "}
              <span className="results">
                {find} in {near}
              </span>
            </h5>
          )}
        </div>

        {stores?.length > 0 &&
          stores.map((store) => (
            <SearchCard
              businessName={store?.Business?.business_name}
              slug={`/store/${store?.unique_name}`}
              imageSrc={store?.Business?.profile_pic_url}
              locationState={store?.state}
              locationCountry={store?.country}
              openingTime={store?.openingTime} //TODO: Pass in store times and determine opening time within the component
              closingTime={store?.closingTime}// TODO: Pass in store times and determine opening time within the component
              address={store?.address_line_1}
              tags={store?.Business?.BusinessTags}
              reviewAvg={store?.avg_star_rating}
              reviewCount={store?.review_count}
              key={store?.id}
            />
          ))}

        <style>{`
          .results {
            font-weight: 400;
          }
          .results-block {
            margin-bottom: 1rem;
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
  );
}
