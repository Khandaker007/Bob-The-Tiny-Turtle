import React from 'react';

// LOGO
import bobLogo from '../../assets/logo/bob-logo.svg';
// LAYOUT
import numberLayoutLight from '../../assets/layout/layout-numberLight.svg';

import style from './navbar.module.scss';

const Navbar = () => {
    const { navbar, logoContainer, layoutContainer, layout, logo, list, item, number } = style;
    return (
        <div className={navbar}>
            <div className={logoContainer}>
                <img className={logo} src={bobLogo} alt="bob logo" />
            </div>
            <ul className={list}>
                <li className={item}>Home</li>
                <li className={item}>About</li>
                <li className={item}>Contact</li>
                <li className={item}>
                    <div className={layoutContainer}>
                        <img className={layout} src={numberLayoutLight} alt="layout" />
                    </div>
                    <span className={number}>+88 01724 256713</span>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
