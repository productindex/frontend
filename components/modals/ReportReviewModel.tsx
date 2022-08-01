import React, {useState} from 'react'
import styles from '@productindex/components/modals/modals.module.css'
import { Dropdown } from '@productindex/components/formElements/Dropdown';
import { TextArea } from '@productindex/components/formElements/TextArea';
import { ReviewCard } from '@productindex/components/cards/ReviewCard';
import { useEffect } from 'react';

type Props = {
    open: boolean;
}

function ReportReviewModel({open}: Props) {
    const [isOpened, setOpen] = useState(true)
    useEffect(() => {
        setOpen(open)
    }, [open])
   
  return (
  <>
    {   
    isOpened ? 
        <div>
            <div className={styles.modalOverlay} onClick={()=> setOpen(false)}>
            </div>
            <div className={styles.modal}>
            <span className={styles.closeBtn} onClick={()=> setOpen(false)}><img src=' /icons/Cross.svg' /> </span>
                <div className={styles.modalContent}>
                   
                    <h4>Report a Review</h4>
                    <div className={styles.exampleBox}>
                        <ReviewCard 
                            personName='Stefano'
                            starRatings={5}
                            reviewDate='Now'
                            comments='This is a shitty business'
                            id={1}
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

export default ReportReviewModel