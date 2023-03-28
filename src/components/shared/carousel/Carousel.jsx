import React from 'react';

// Slick Slider
import Slider from 'react-slick/lib/slider';

// component
import { ProductCard } from '../productCard';
import { TestimonialCard } from '../testimonialCard';

// Bestseller Data
import bestsellerData from '../../../assets/data/bestsellerData.json';
import testimonialData from '../../../assets/data/testimonialData.json';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss';

const Carousel = ({ dots, centerMode, slidesToShow, slidesToScroll, card }) => {

    const settings = {
        dots: dots,
        centerMode: centerMode,
        centerPadding: '0',
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
    };
    return (
        <div className='carousel'>
            <Slider {...settings}>
                {
                  card === 'product' ?
                  bestsellerData.map((data) => (
                    <ProductCard key={data.id} name={data.title} price={data.price}/>
                  )) : 
                  card === 'testimonial' ?
                  testimonialData.map((data) => (
                    <TestimonialCard key={data.id} comment={data.comment}/>
                  )) : ''
                }
            </Slider>
        </div>
    );
};

export default Carousel;
