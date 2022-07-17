import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Ratings } from "../pieces/starRatings";

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
  ...props
}) => {
  return (
    <div className="review-card">
      <div className="identity">
        <div className="avatar-photo"></div>
        <div className="name-box">
          <h5>{personName}</h5>
        </div>
      </div>

      <div className="review-stars">
        <Ratings rating={starRatings} />
      </div>
      <small>{reviewDate}</small>
      <p className="description">{comments}</p>

      <style jsx>
        {" "}
        {`
          .review-card:not(:last-child) {
            margin-bottom: 1.5rem;
          }
          .review-stars {
            margin-top: 0.25rem;
            margin-bottom: 0.5rem;
          }
          .description {
            margin-top: 0.5rem;
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .identity {
            display: flex;
            column-gap: 0.5rem;
            align-items: center;
          }
          .avatar-photo {
            width: 32px;
            height: 32px;
            background-color: black;
            border-radius: 24px;
          }
        `}
      </style>
    </div>
  );
};

export { ReviewCard };
