import React, {useState} from 'react'
import styles from '@productindex/components/modals/modals.module.css'
import { Dropdown } from '@productindex/components/formElements/dropdown';
import { ReviewCard } from '@productindex/components/cards/ReviewCard';
import { useEffect } from 'react';
import { ReviewsApi } from '@productindex/api/review';


interface ReportedReview {
    personName: string;
    starRatings: number;
    reviewDate : string;
    comments: string;
    id: number;
    store_id: number;
}

type Props = {
    open: boolean;
    setOpenState : any;
    reportedReviewInfo : ReportedReview
}

function ReportReviewModel({open, setOpenState, reportedReviewInfo}: Props) {
   useEffect(()=> {
    setOpenState(open)
   }, [open])

   const [reportedReason, setReportedReason] = useState('')
  return (
  <>
    {   
    open ? 
        <div>
            <div className={styles.modalOverlay} onClick={()=> setOpenState(false)}>
            </div>
            <div className={styles.modal}>
            <span className={styles.closeBtn} onClick={()=> setOpenState(false)}><img src=' /icons/Cross.svg' /> </span>
                <div className={styles.modalContent}>
                   
                    <h4>Report a Review</h4>
                    <div className={styles.exampleBox}>
                        <ReviewCard 
                            personName={reportedReviewInfo.personName}
                            starRatings={reportedReviewInfo.starRatings}
                            reviewDate={reportedReviewInfo.reviewDate}
                            comments={reportedReviewInfo.comments}
                            id={reportedReviewInfo.id}
                        />
                    </div>
                    <Dropdown 
                    valueLabel='Reason for reporting'
                    optionList={[{name: 'Racist', value: 'racism', default: true}]}
                    value={reportedReason}
                    showLabel
                    onChange={e => setReportedReason(e.target.value)}
                    />
                    <button className='btn-secondary btn review-btn' onClick={()=> {ReviewsApi.reportStoreReview(reportedReviewInfo.id, reportedReason)}}>Report Review</button>
                </div>
            </div>

        </div>
        : null
    }
    </>
  )
}

export default ReportReviewModel