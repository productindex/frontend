import React from 'react'
import styles from './portfolio.module.css'

type Props = {
    imageUrls: string[];
}

function StorePortfolio({imageUrls}: Props) {
  return (
    <div className={`side-by-side ${styles.portfolio}`}>
        {
        imageUrls.map(url => 
            <div className={styles.portfolioItem}>
                <img className={styles.portfolioImage} src={url} alt='Portfolio pic' />
            </div>
        )
        }
    </div>
  )
}

export default StorePortfolio