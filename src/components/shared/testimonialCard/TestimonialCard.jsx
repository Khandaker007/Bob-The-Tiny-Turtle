import React from 'react';

import userImg from '../../../assets/images/userImg.png';
import { FaStar } from "react-icons/fa";

import style from './testimonial-card.module.scss';

const {
    testimonialCard,
    contentContainer,
    imgContainer,
    img,
    review,
    ratingContainer,
    icon
} = style;

const TestimonialCard = ({ comment }) => {
  return (
    <div className={testimonialCard}>
        <div className={contentContainer}>
            <div className={imgContainer}>
                <img className={img} src={userImg} alt="reviewer img" />
            </div>
            <p className={review}>{comment}</p>
            <div className={ratingContainer}>
                <FaStar className={icon}/>
                <FaStar className={icon}/>
                <FaStar className={icon}/>
                <FaStar className={icon}/>
                <FaStar className={icon}/>
            </div>
        </div>
    </div>
  );
};

export default TestimonialCard;
