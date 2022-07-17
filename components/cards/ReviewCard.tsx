import React from "react";
import { Ratings } from "../pieces/starRatings";
import styles from '@productindex/components/cards/cards.module.css'

interface ReviewCardProps {
  personName: string;
  starRatings: number;
  reviewDate: string;
  comments: string;
}
const ReviewCard: React.FC<ReviewCardProps> = ({
  personName,
  starRatings,
  reviewDate,
  comments,
}) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.identity}>
        <div className={styles.avatarPhoto}></div>
        <div>
          <h5>{personName}</h5>
        </div>
      </div>

      <div className={styles.reviewStars}>
        <Ratings rating={starRatings} />
      </div>
      <small>{reviewDate}</small>
      <p className="description">{comments}</p>
    </div>
  );
};

export { ReviewCard };
