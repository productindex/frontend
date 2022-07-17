import React from "react";
import styles from '@productindex/components/cards/cards.module.css'

interface ProductCardProps {
  photoSrc?: string;
  productName: string;
  description: string;
  price?: string;
}
const ProductCard: React.FC<ProductCardProps> = ({
  photoSrc,
  productName,
  description,
  price,
}) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productPhoto}>
        <img
          alt={productName}
          src={!photoSrc ? "/images/Default-photo-item.png" : photoSrc}
        />
      </div>
      <div className={styles.productMeta}>
        <h5>{productName}</h5>
        <p className="description">{description}</p>
      </div>
      <div className={styles.productPrice}>
        <h5>{price}</h5>
      </div>
    </div>
  );
};

export { ProductCard };
