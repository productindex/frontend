import React, {useEffect} from 'react'
import BusinessContactType from '@productindex/types/BusinessContactType'
import styles from './cards.module.css'

type Props = {
    contactInfo: BusinessContactType;
}
const BusinessContactCard = ({contactInfo}: Props) => {
    return (
      <div className="card">
      <h5>Contact Us</h5>
      {contactInfo ? (
        <ul className={styles.list}>
          {/* TODO: Add social media icons or a link mask (eg. 'Visit page' link) instead of raw links */}
          {contactInfo.phone && (
            <li className={styles.listItem}>
              <span className="item-title">Phone 1: </span>{" "}
              {contactInfo.phone}
            </li>
          )}
          {contactInfo.phone_2 && (
            <li className={styles.listItem}>
              <span className="item-title">Phone 2: </span>{" "}
              {contactInfo.phone_2}
            </li>
          )}
          {contactInfo.phone_3 && (
            <li className={styles.listItem}>
              <span className="item-title">Phone 3: </span>{" "}
              {contactInfo.phone_3}
            </li>
          )}
          {contactInfo.email && (
            <li className={styles.listItem}>
              <span className="item-title">Email: </span>{" "}
              {contactInfo.email}
            </li>
          )}
          {contactInfo.instagram_url && (
            <li className={styles.listItem}>
              <span className="item-title">Instagram: </span>{" "}
              {contactInfo.instagram_url}
            </li>
          )}
          {contactInfo.facebook_url && (
            <li className={styles.listItem}>
              <span className="item-title">Facebook: </span>{" "}
              {contactInfo.facebook_url}
            </li>
          )}
          {contactInfo.twitter_url && (
            <li className={styles.listItem}>
              <span className="item-title">Twitter: </span>{" "}
              {contactInfo.twitter_url}
            </li>
          )}
          {contactInfo.business_website && (
            <li className={styles.listItem}>
              <span className="item-title">Website: </span>{" "}
              {contactInfo.business_website}
            </li>
          )}
        </ul>
    ) : (
      <small> No contact info </small>
    )}
  </div>
  )
}

export default BusinessContactCard