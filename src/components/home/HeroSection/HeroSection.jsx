import React from 'react';

// IMAGE
import heroImg from '../../../assets/images/hero-img.svg';
import bgImg from '../../../assets/layout/hero-bg.svg';
import btnBg from '../../../assets/layout/btn-bg.svg';

import style from './hero-section.module.scss';

const HeroSection = () => {
    const {
        heroSection,
        contentContainer,
        content,
        imgContainer,
        img,
        title,
        desc,
        btn,
        btnImg,
        text,
        bgLayout
    } = style;

    return (
        <div className={heroSection}>
            <div className={contentContainer}>
                <div className={content}>
                    <h1 className={title}>TINY TURTLE</h1>
                    <p className={desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className={btn}>
                        <img className={btnImg} src={btnBg} alt="btn background" />
                        <span className={text}>Shop Now</span>
                    </button>
                </div>
                <div className={imgContainer}>
                    <img className={img} src={heroImg} alt="hero img" />
                </div>
            </div>
            <div className={bgLayout}>
                <img className={img} src={bgImg} alt="background layout" />
            </div>
        </div>
    );
};

export default HeroSection;
