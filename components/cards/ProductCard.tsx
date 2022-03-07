import Link from "next/link"
import Image from "next/image"
import React from 'react'

interface ProductCardProps  {
    photoSrc?: string;
    productName: string;
    description: string;
    price?: string;
}
const ProductCard:  React.FC<ProductCardProps>  = ({
    photoSrc,
    productName,
    description,
    price,
...props
}) => {
    return (
        <div className="product-card">
            <div className="product-photo">
                <img src={photoSrc} />
            </div>
            <div className="product-meta">
                <h5>{productName}</h5>
                <p className='description'>{description}</p>
                </div>
                <div className="product-price">
                <h5>{price}</h5>
            </div>

        <style jsx> {
            `
            .product-card {
                display: flex;
                width: 100%;
                column-gap: 1rem;
                border: 1.5px solid #E5E9E8;
                border-radius: 2px;
                margin-bottom: .5rem;
                background-color: #FFFFFF;
                min-height: 100px;
            }
            .product-photo {
                min-width: 100px;
                min-height: 100px;
                background-color: red;
                border-radius: 2px;
            }
            .product-meta {
                padding: .5rem 0;
            }
            .product-meta .description{
                margin-top: .25rem;
                font-size: 1rem;
                line-height: 1.5rem;
            }
            .product-price {
                padding: .5rem 1rem;
                margin-left: auto;
            }
            `
        }
            
        </style>
    </div>
    )

}

 export {ProductCard}