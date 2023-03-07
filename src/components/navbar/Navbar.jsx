import React from 'react';

import style from './navbar.module.scss';

const Navbar = () => {
    const { navbar } = style;
    return (
        <div className={navbar}>
            <h1>Navbar</h1>
        </div>
    );
};

export default Navbar;
