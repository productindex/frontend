
import Link from "next/link"
import Image from "next/image"
import React from 'react'
import StarRatings from 'react-star-ratings';

interface StoreRatingProps  {
    rating?: string;
}
const Ratings:  React.FC<StartRatingProps>  = ({
    rating,
    closingTime,
...props
}) => {

    return (
        <div >
            <StarRatings
                rating={rating}
                starRatedColor="#3DB2B0"
                changeRating={()=> {}}
                numberOfStars={5}
                name='rating'
                starDimension='24px'
                starSpacing='2px'
                starEmptyColor='#E5E9E8'
            />
    
        </div>
    )

}

 export {Ratings}


