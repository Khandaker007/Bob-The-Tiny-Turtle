import React from 'react';

import style from './footer.module.scss';

const Footer = () => {
    const { footer } = style;
    return (
        <div className={footer}>
            <h1>Footer</h1>
        </div>
    );
};

export default Footer;
