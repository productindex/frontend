import React, {useState} from 'react'
import ReportReviewModel from "@productindex/components/modals/ReportReviewModel";
import { TextArea } from "@productindex/components/formElements/TextArea";
import { ReviewCard } from "@productindex/components/cards/ReviewCard";
import { EmptyStateMessages } from "@productindex/const/errors";
import contextTime from '@productindex/util/contextTime'
import { StoreReview } from '@productindex/types/StoreReview';
import { Ratings } from '@productindex/components/pieces/starRatings';

type Props = {
    reviews: Array<StoreReview>;
}

function ReviewsBox({reviews}: Props) {
    const [modalOpen, setModalOpen] = useState(false)
    const [reviewInput, setReviewInput] = useState('')
    const [reportSelectedReview, setReportSelectedReview] = useState(null)

    const reportReview = (review : StoreReview) => {

        const reportedReview = {
            personName: `${review?.User?.first_name} ${review?.User?.last_name}`,
            starRatings: review.rating_number,
            reviewDate: contextTime(review.insert_date),
            comments: review.comment,
            id: review.id,
            store_id: review.store_id

        }
        setReportSelectedReview(reportedReview)
        setModalOpen(true)
    }
    const submitReview = () => {
    console.log(reviewInput)
    //TODO: Implement submit review function
    //TODO: Only submit a review if the current user has not submitted a review for this store
    }
    
  return (
    <>
        <div className="yourReview">
            <h5>Add a review</h5>
            <Ratings />
            <TextArea 
            name={'add-review'}
            valuePlaceholder={'Add your first review now'}
            onChange={(e)=> {setReviewInput(e.target.value)}}
            value={reviewInput}
            />
            <button className='btn btn-secondary review-btn' onClick={()=> submitReview()}>Submit Review</button>
             
        </div>

        <div className="review-section-box">
        <h4>What are people saying</h4>  
        <ReportReviewModel open={modalOpen} setOpenState={setModalOpen} reportedReviewInfo={reportSelectedReview}/>
        <br />
        {reviews.length > 0 ? (
            reviews.map((review) => (
            <ReviewCard
                reportReview={() => reportReview(review)}
                id={review.id}
                personName={`${review?.User?.first_name} ${review?.User?.last_name}`}
                starRatings={review.rating_number}
                reviewDate={contextTime(review.insert_date)}
                comments={review.comment}
                reportable
                key={review.id}
            />
            ))
        ) : (
            <div className="empty-box">
                <p>{EmptyStateMessages.reviews}</p>
            </div>
        )}
        </div>
    </>
  )
}

export default ReviewsBox