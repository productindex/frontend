import React, {useState} from 'react'
import ReportReviewModel from "@productindex/components/modals/ReportReviewModel";
import { TextArea } from "@productindex/components/formElements/TextArea";
import { ReviewCard } from "@productindex/components/cards/ReviewCard";
import { EmptyStateMessages } from "@productindex/const/errors";
import contextTime from '@productindex/util/contextTime'
import { StoreReview } from '@productindex/types/StoreReview';
import modalStyles from '@productindex/components/modals/modals.module.css'
import { Dropdown } from '@productindex/components/formElements/dropdown';

type Props = {
    reviews: Array<StoreReview>;
    
}

function ReviewsBox({reviews}: Props) {
    const [modalOpen, setModalOpen] = useState(false)
    const [reviewInput, setReviewInput] = useState('')
    const [reportSelectedReview, setReportSelectedReview] = useState(null)

    const reportReview = (review : StoreReview) => {
        setReportSelectedReview(review)
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
        setReportSelectedReview(null)
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
            <ReportReviewModel open={modalOpen} />
            <TextArea 
            name={'add-review'}
            valuePlaceholder={'Add your first review now'}
            onChange={(e)=> {setReviewInput(e.target.value)}}
            value={reviewInput}
            />
            <button className='btn btn-secondary review-btn' onClick={()=> submitReview()}>Submit Review</button>
             
        </div>

        <div className="review-section-box">
        <h4>What people are saying</h4>  
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
            {" "}
            {EmptyStateMessages.reviews}
            </div>
        )}
        </div>
        {   
    modalOpen ? 
        <div>
            <div className={modalStyles.modalOverlay} onClick={()=> closeModal()}>
            </div>
            <div className={modalStyles.modal}>
            <span className={modalStyles.closeBtn} onClick={()=> closeModal()}><img src=' /icons/Cross.svg' /> </span>
                <div className={modalStyles.modalContent}>
                   
                    <h4>Report a Review</h4>
                    <div className={modalStyles.exampleBox}>
                        <ReviewCard 
                            personName={reportSelectedReview?.User?.first_name}
                            starRatings={reportSelectedReview.rating_number}
                            reviewDate={contextTime(reportSelectedReview.insert_date)}
                            comments={reportSelectedReview.comment}
                            id={reportSelectedReview.id}
                            reportReview
                        />
                    </div>
                    <Dropdown 
                    valueLabel='Reason for reporting'
                    optionList={[]}
                    value={''}
                    showLabel
                    onChange={()=>{return ''}}
                    />
                    <TextArea 
                    showLabel
                    valueLabel="Comments"
                    isOptional
                    valuePlaceholder={"What would you add to support you claim?"}
                    />
                    <button className='btn-secondary btn review-btn'>Report Review</button>
                </div>
            </div>

        </div>
        : null
    }
    </>
  )
}

export default ReviewsBox