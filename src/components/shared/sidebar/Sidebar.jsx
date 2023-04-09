import React from 'react';

import style from './sidebar.module.scss';
import bobLogo from '../../../assets/logo/bob-logo.svg';
import { FaTimes } from "react-icons/fa";

const { header, sidebar, logoContainer, logo, list, item, crossBtn, icon } = style;

const Sidebar = ({ handleToggle }) => {

    // const handleClick = () => {
    //     handleToggle(false);
    // };

  return (
    <div className={sidebar}>
        <div className={header}>
            <button className={crossBtn} onClick={() => handleToggle()}>
                <FaTimes className={icon}/>
            </button>
            <div className={logoContainer}>
                <img className={logo} src={bobLogo} alt='logo container'/>
            </div>
        </div>
        <ul className={list}>
            <li className={item}>Home</li>
            <li className={item}>About Us</li>
            <li className={item}>Products</li>
            <li className={item}>FAQ</li>
        </ul>
    </div>
  );
};

export default Sidebar;
