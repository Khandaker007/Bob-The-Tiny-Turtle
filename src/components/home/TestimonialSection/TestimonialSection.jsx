import React from 'react';

// COMPONENT
import { Carousel } from '../../shared';

// IMAGE
import bgImg from '../../../assets/layout/testimonial-bg.svg';
// LAYOUT
import layoutImg from '../../../assets/layout/layout-testimonial.svg';

import style from './testimonial-section.module.scss';

const TestimonialSection = () => {
  const { testimonialSection, contentContainer, heading, sliderContainer, backgroundContainer, img, layoutContainer } = style;

  return (
    <div className={testimonialSection}>
        <div className={contentContainer}>
            <h1 className={heading}>Testimonials</h1>
            <div className={sliderContainer}>
                <Carousel
                    dots={true}
                    centerMode={true}
                    slidesToShow={3}
                    slidesToScroll={1}
                    card='testimonial'
                />
            </div>
        </div>
        <div className={backgroundContainer}>
            <img className={img} src={bgImg} alt="background img" />
        </div>
        <div className={layoutContainer}>
            <img className={img} src={layoutImg} alt="layout" />
        </div>
    </div>
  );
};

export default TestimonialSection;
