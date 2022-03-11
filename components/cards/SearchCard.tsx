import Link from "next/link"
import Image from "next/image"
import React from 'react'
import { StoreAvailability } from '../../components/puzzlePiece/storeAvailability'
import { Tag } from '../../components/tag'

interface SearchCardProps  {
    businessName?: string;
    slug?: string;
    locationState?: string;
    locationCountry?: string;
    openingTime?: string;
    closingTime?: string
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
    address,
    tags,
    reviewAvg,
    reviewCount,
    imageSrc,
    openingTime,
    closingTime,
...props
}) => {

    return (
        <div>
        <Link href={slug}>
            
            <div className='card-search'>
                    <div className="search-photo">
                        <img src={!imageSrc? '/images/Default-photo-store.png' : imageSrc} />
                    </div>
                    <div className="card-search-content">
                        <small>Business in {`${locationState}, ${locationCountry}`}</small> 
                        <h4>{businessName}</h4>
                        <div className="meta-details">
                            <div className="availability"><StoreAvailability openingTime={openingTime} closingTime={closingTime} /></div>
                            <div className="location-box"><div> <Image src='/images/Pin.svg' width={24} height={24}/></div><span className='address'>{`${address}`}</span> </div>

                        </div>
                        <div className="tag-box">
                            { tags && tags.length > 0 && tags.map(tag => <Tag description={tag} />)}
                        </div>
                    </div>
                    <div className="card-search-options">
                        <div className="search-star-reviews"><div><Image src='/images/Star.svg' width={24} height={24}/></div><div>{`${reviewAvg} (${reviewCount})`}</div></div>
                    </div>

            </div>
        </Link>

        <style jsx> {
            `
            .card-search {
                height: 10.5rem;
                display: flex;
                border: 1.5px solid #E5E9E8;
                width: 70%;
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
            .search-photo img{
                object-fit: cover;
                height: 100%;
                width: 100%;
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
                padding: 1rem 1rem;
                align-item: center;
                font-weight: 500;
                color: #5C5C5C;
            }
            .search-star-reviews,
            .availability,
            .location-box {
                line-height: 1.5rem;
                column-gap: 2px;
                display: flex;
            }
            .card-search-options {
                margin-left: auto;
                
            }
            .address {
                color: #5C5C5C;
            }
            `
        }
            
        </style>
    </div>
    )

}

 export {SearchCard}