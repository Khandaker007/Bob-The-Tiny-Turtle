import React from 'react';

import bobLogo from '../../../assets/logo/bob-logo.svg';
import numberLayoutLight from '../../../assets/layout/layout-numberLight.svg';
import { FaBars } from "react-icons/fa";

import style from './navbar.module.scss';

const {
    navbarDesktop,
    logoContainer,
    layoutContainer,
    layout,
    logo,
    list,
    item,
    number,
    navbarMob,
    menu
} = style;

const Navbar = ({ handleToggle }) => {
    // const handleClick = () => {
    //     handleToggle(true);
    // };

    return (
        <>
            <div className={navbarDesktop}>
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
            <div className={navbarMob}>
                <button className={menu} onClick={() => handleToggle()}><FaBars/></button>
                <div className={logoContainer}>
                    <img className={logo} src={bobLogo} alt="bob logo" />
                </div>
                <div></div>
            </div>
        </>
    );
};

export default Navbar;
