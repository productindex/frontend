import React from "react";
import styles from '@productindex/components/cards/cards.module.css'

interface ProductCardProps {
  photoSrc?: string;
  productName: string;
  description: string;
  price?: string;
  id: number | string;
}
const ProductCard: React.FC<ProductCardProps> = ({
  photoSrc,
  productName,
  description,
  price,
  id
}) => {
  return (
    <div className={styles.productCard} key={id}>
      <div className={styles.productPhoto}>
        <img
          alt={productName}
          src={!photoSrc ? "/images/Default-photo-item.png" : photoSrc}
        />
      </div>
      <div className={styles.productMeta}>
        <h5>{productName}</h5>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.productPrice}>
        <h5>{price}</h5>
      </div>
    </div>
  );
};

export { ProductCard };
