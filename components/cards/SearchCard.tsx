import Link from "next/link"
import Image from "next/image"
import React from 'react'

interface SearchCardProps  {
    businessName?: string;
    slug?: string;
    locationState?: string;
    locationCountry?: string;
    openStatus?: string;
    address?: string;
    tags?: string[];
    reviewAvg?: number;
    imageSrc?: string;
    reviewCount?: number;
}
const SearchCard:  React.FC<SearchCardProps>  = ({
    businessName,
    slug,
    locationState,
    locationCountry,
    openStatus,
    address,
    tags,
    reviewAvg,
    reviewCount,
    imageSrc,
...props
}) => {
    return (
        <div>
        <Link href={slug}>
            <div className='card-search'>
                    <div className="search-photo">
                        <Image quality='60' width={150} height={150} src={!imageSrc? '/../images/Search-queries.png' : imageSrc}/>
                    </div>
                    <div className="card-search-content">
                        <small>Business in {`${locationState}, ${locationCountry}`}</small> 
                        <h4>{businessName}</h4>
                        <div className="meta-details">
                            <div className="availability">{`${openStatus}`}</div>
                            <div className="location-box"> <span className='address'>{`${address}`}</span> </div>

                        </div>
                        <div className="tag-box">
                            {tags.map(tag => <div className='tag'>{tag}</div>)}
                        </div>
                    </div>
                    <div className="card-search-options">
                        <div className="search-star-reviews">{`${reviewAvg} (${reviewCount})`}</div>
                    </div>

            </div>
        </Link>

        <style jsx> {
            `
            .card-search {
                height: 10.5rem;
                display: flex;
                border: 1.5px solid #E5E9E8;
                width: 60%;
                border-radius: 2px;
                cursor: pointer;
                transition: all .5s;
                margin-bottom: 0.5rem;
            }
            .card-search:hover {
                background-color: #FBFBFB;
                border: 1.5px solid transparent;
            }
            .search-photo {
                width: 150px;
                heigh: 150px;
                background-color: #E5E9E8;
                border-radius: 2px;
                text-align: center;
            }
            .search-photo p{
                margin: auto;
            }
            .card-search-content {
                padding: 1rem 1.25rem;
                max-width: 100%;
            }
            .meta-details {
                display: flex;
                column-gap: 1rem;
                margin-top: 0.5rem;
            }
            .tag-box {
                margin-top: 1rem;
            }
            .tag {
                background-color: #E5E9E8;
                width: auto;
                display: inline-block;
                padding: 4px 8px;
                border-radius: 20px;
                letter-spacing: 0.5px;
                font-weight: 500;
                font-size: 0.875rem;
            }
            .tag:not(:first-child) {
                margin-left: .5rem;
            }
            .search-star-reviews {
                padding: 1rem 1rem
            }
            .card-search-options {
                margin-left: auto;
            }
            `
        }
            
        </style>
    </div>
    )

}

 export {SearchCard}