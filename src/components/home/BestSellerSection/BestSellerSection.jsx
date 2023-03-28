import React from 'react';

// COMPONENTS
import { Carousel } from '../../shared';

// Bestseller Data
import bestsellerData from '../../../assets/data/bestsellerData.json';

// LAYOUT
import bgLayout from '../../../assets/layout/best-seller-bg.svg';

import style from './best-seller-section.module.scss';

const {
    bestSellerSection,
    heading,
    sliderContainer,
    contentContainer,
    bgContainer,
    bgImg,
} = style;

const BestSellerSection = () => {

    console.log('Bestseller Data: ', bestsellerData);

    return (
        <div className={bestSellerSection}>
            <div className={contentContainer}>
                <h1 className={heading}>Best Seller</h1>
                <div className={sliderContainer}>
                    <Carousel
                        dots={false}
                        centerMode={false}
                        slidesToShow={3}
                        slidesToScroll={1}
                        card='product'
                    />
                </div>
            </div>
            <div className={bgContainer}>
                <img className={bgImg} src={bgLayout} alt="background layout" />
            </div>
        </div>
    );
};

export default BestSellerSection;
