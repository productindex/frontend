import React from "react";
import StarRatings from "react-star-ratings";

interface StoreRatingProps {
  rating?: number;
}
const Ratings: React.FC<StoreRatingProps> = ({ rating }) => {
  return (
    <div>
      <StarRatings
        rating={rating}
        starRatedColor="#3DB2B0"
        numberOfStars={5}
        name="rating"
        starDimension="24px"
        starSpacing="2px"
        starEmptyColor="#E5E9E8"
      />
    </div>
  );
};

export { Ratings };
