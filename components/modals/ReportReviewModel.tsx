import React, {useState} from 'react'
import styles from '@productindex/components/modals/modals.module.css'
import { Dropdown } from '@productindex/components/formElements/dropdown';
import { ReviewCard } from '@productindex/components/cards/ReviewCard';
import { useEffect } from 'react';
import { ReviewsApi } from '@productindex/api/review';
import { useFormik } from "formik";
import * as Yup from "yup";
import { ReviewsErrorMessages } from '../../const/errors';
import { toasty } from '@productindex/util/toasty';


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

   const formik = useFormik({
    initialValues: {
      reportedReason: "",
    },
    onSubmit: async (values) => {
        const {success, error} = await ReviewsApi.reportStoreReview(reportedReviewInfo.id, values.reportedReason)
        if (success) return setOpenState(false)
        toasty('error', error)
    },
    validationSchema: Yup.object({
        reportedReason: Yup.string()
        .required(ReviewsErrorMessages.reportedReasonRequired),
    }),
  });
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
                    <form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                        <Dropdown 
                        name='reportedReason'
                        valueLabel='Reason for reporting'
                        optionList={[{name: 'Racist', value: 'racism'}]}
                        value={formik.values.reportedReason}
                        showLabel
                        onChange={e => formik.setFieldValue('reportedReason', e.target.value)}
                        error={formik.errors.reportedReason}
                        />
                        <button disabled={formik.isSubmitting} className='btn-secondary btn review-btn' type='submit'>Report Review</button>
                    </form>

                </div>
            </div>

        </div>
        : null
    }
    </>
  )
}

export default ReportReviewModel