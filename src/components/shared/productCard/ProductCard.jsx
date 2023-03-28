import React from 'react';

// IMAGES
import productImg2 from '../../../assets/images/product2.svg';

import style from './product-card.module.scss';

const ProductCard = ({ image, name, price }) => {
    const { productCard, imgContainer, detailContainer, img, productName, productPrice } = style;

    return (
        <div className={productCard}>
            <div className={imgContainer}>
                <img className={img} src={productImg2} alt="product img" />
            </div>
            <div className={detailContainer}>
                <p className={productName}>{name}</p>
                <p className={productPrice}>Price: <span>{price}</span>$</p>
            </div>
        </div>
    );
};

export default ProductCard;
