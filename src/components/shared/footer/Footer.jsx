import React from 'react';

// LAYOUT
import designLayout from '../../../assets/layout/layout-footer.svg';
import iconBg from '../../../assets/layout/layout-icon.svg';
import numberBg from '../../../assets/layout/layout-numberDark.svg';
// LOGO
import bobLogo from '../../../assets/logo/bob-logo.svg';
// ICONS
import iconPhone from '../../../assets/icons/phone-icon.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import style from './footer.module.scss';

const Footer = () => {
    const {
        footer,
        layout,
        img,
        numberContainer,
        box,
        contentContainer,
        containerLeft,
        containerRight,
        logoContainer,
        logo,
        iconBox,
        bgImage,
        numberBox,
        number,
        icon,
        bgIcon,
        copywrite,
        iconsContainer,
        iconContainer,
        contactContainer,
        heading,
        address,
        email,
        craftedBy,
        craftedByMob
    } = style;

    return (
        <div className={footer}>
            <div className={layout}>
                <img className={img} src={designLayout} alt="layout" />
            </div>
            <div className={numberContainer}>
                <div className={box}>
                    <img className={bgImage} src={numberBg} alt="number layout" />
                    <div className={numberBox}>
                        <div className={iconBox}>
                            <img className={icon} src={iconPhone} alt="icon phone" />
                        </div>
                        <p className={number}>+88 01724 256713</p>
                    </div>
                </div>
            </div>
            <div className={contentContainer}>
                <div className={containerLeft}>
                    <div className={logoContainer}>
                        <img className={logo} src={bobLogo} alt="bob logo" />
                    </div>
                    <span className={copywrite}>@Bob the Tiny Turtle - 2022</span>
                    <span className={craftedByMob}>Crafted with JoYY by YY Design</span>
                </div>
                <div className={containerRight}>
                    <div className={iconsContainer}>
                        <span className={iconContainer}>
                            <img className={bgIcon} src={iconBg} alt="icon background" />
                            <FaFacebookF className={icon}/>
                        </span>
                        <span className={iconContainer}>
                            <img className={bgIcon} src={iconBg} alt="icon background" />
                            <FaInstagram className={icon}/>
                        </span>
                        <span className={iconContainer}>
                            <img className={bgIcon} src={iconBg} alt="icon background" />
                            <FaLinkedinIn className={icon}/>
                        </span>
                    </div>
                    <div className={contactContainer}>
                        <h2 className={heading}>Contact</h2>
                        <p className={address}>
                            <span>Plot No: 09 (6th Floor), Block: 00, Road: 00</span>
                            <span>Banani, Dhaka-1200, Bangladesh</span>
                        </p>
                        <p className={email}>bobthetinyturtle@gmail.com</p>
                        <span className={craftedBy}>Crafted with JoYY by YY Design</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
