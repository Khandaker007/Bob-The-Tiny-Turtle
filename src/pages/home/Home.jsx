import React from 'react';

// COMPONENTS
import {
  HeroSection,
  AboutSection,
  BestSellerSection,
  ProductsListSection,
  TestimonialSection
} from '../../components';

import style from './home.module.scss';

const Home = () => {
  const { home } = style;

  return (
    <div className={home}>
      <HeroSection/>
      <AboutSection/>
      <BestSellerSection/>
      <ProductsListSection/>
      <TestimonialSection/>
    </div>
  );
};

export default Home;
