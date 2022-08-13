import React from "react";
import { Ratings } from "../pieces/starRatings";
import styles from '@productindex/components/cards/cards.module.css'

interface ReviewCardProps {
  personName: string;
  starRatings: number;
  reviewDate: string;
  comments: string;
  updatedDate? : string;
  id: number;
  reportReview?: any;
  reportable? : boolean;
}
const ReviewCard: React.FC<ReviewCardProps> = ({
  personName,
  starRatings,
  reviewDate,
  comments,
  updatedDate,
  id,
  reportReview,
  reportable,
}) => {
  return (
    <div className={styles.reviewCard} key={id}>
      <div className={styles.identity}>
        <div className={styles.avatarPhoto}></div>
        <div>
          <h5>{personName}</h5>
        </div>
      </div>

      <div className={styles.reviewStars}>
        <Ratings rating={starRatings} />
      </div>
       <small>Reviewed {reviewDate}</small> 
      {updatedDate && (updatedDate !== reviewDate) && <small> Updated Review</small>}
      <p className={styles.reviewDescription}>{comments}</p>
      {reportable && <div onClick={reportReview} className={styles.link}>Report Review</div>}
    </div>
  );
};

export { ReviewCard };
