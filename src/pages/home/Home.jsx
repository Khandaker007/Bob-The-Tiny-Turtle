import React from 'react';

import style from './home.module.scss';

const Home = () => {
  const { home } = style;

  return (
    <div className={home}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
