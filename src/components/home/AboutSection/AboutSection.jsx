import React from 'react';

// IMAGE
import bgImg from '../../../assets/images/about-bg.jpg';
import layout from '../../../assets/layout/layout-about.svg';

import style from './about-section.module.scss';

const AboutSection = () => {
    const {
        aboutSection,
        content,
        heading,
        headingSmall,
        headingLarge,
        desc,
        bgContainer,
        mask,
        layoutContainer,
        img
    } = style;

    return (
        <div className={aboutSection}>
            <div className={content}>
                <h2 className={heading}>
                    <span className={headingSmall}>Making Educational Toys</span>
                    <span className={headingLarge}>Fun for Kids</span>
                </h2>
                <p className={desc}>
                    When you combine creativity and imagination with the excitement of
                    learning, you have a HABA toy. Your child will have hours of fun as
                    they grow their skills and discover new experiences. High quality and
                    durable, these are toys that will be there for your kids today and tomorrow.
                </p>
                <p className={desc}>HABA toys are made for the most important people of all: your family.</p>
            </div>
            <div className={bgContainer}>
                <img src={bgImg} alt="background img" />
                <div className={mask}></div>
            </div>
            <div className={layoutContainer}>
                <img className={img} src={layout} alt="layout" />
            </div>
        </div>
    );
};

export default AboutSection;
