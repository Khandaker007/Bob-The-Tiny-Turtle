import React, { useState } from 'react';

// COMPONENTS
import { ProductCard } from '../../shared';

// PRODUCTS DATA
import productsData from '../../../assets/data/productData.json';

// BUTTON BACKGROUND
import btnOneYear from '../../../assets/layout/product-btn1.svg';
import btnTwoYear from '../../../assets/layout/product-btn2.svg';
import btnFiveYear from '../../../assets/layout/product-btn3.svg';
import btnEightYear from '../../../assets/layout/product-btn4.svg';

import style from './products-list-section.module.scss';


const infantsProducts = productsData.filter(category => category.age === 'infants')[0].products;
const toddlersProducts = productsData.filter(category => category.age === 'toddlers')[0].products;
const preschoolersProducts = productsData.filter(category => category.age === 'preschoolers')[0].products;
const earlyElementaryProducts = productsData.filter(category => category.age === 'earlyElementary')[0].products;

const ProductsListSection = () => {
    const {
        productsListSection,
        heading,
        navContainer,
        list,
        item,
        bgImg,
        text,
        productListContainer,
        cardContainer
    } = style;
    
    const [infants, setInfants] = useState(true);
    const [toddlers, setToddlers] = useState(false);
    const [preschoolers, setPreschoolers] = useState(false);
    const [earlyElementary, setEarlyElementary] = useState(false);

    const handleInfants = () => {
        setInfants(true);
        setToddlers(false);
        setPreschoolers(false);
        setEarlyElementary(false);
    }
    const handleToddlers = () => {
        setInfants(false);
        setToddlers(true);
        setPreschoolers(false);
        setEarlyElementary(false);
    }
    const handlePreschoolers = () => {
        setInfants(false);
        setToddlers(false);
        setPreschoolers(true);
        setEarlyElementary(false);
    }
    const handleEarlyElementary = () => {
        setInfants(false);
        setToddlers(false);
        setPreschoolers(false);
        setEarlyElementary(true);
    }
    
    return (
        <div className={productsListSection}>
            <h1 className={heading}>Products</h1>
            <div className={navContainer}>
                <ul className={list}>
                    <li className={item} onClick={() => handleInfants()}>
                        <img className={bgImg} src={btnOneYear} alt="btn background" />
                        <p className={text}>
                            <span>5-12</span>
                            <span>Months</span>
                        </p>
                    </li>
                    <li className={item} onClick={() => handleToddlers()}>
                        <img className={bgImg} src={btnTwoYear} alt="btn background" />
                        <p className={text}>
                            <span>12-24</span>
                            <span>Months</span>
                        </p>
                    </li>
                    <li className={item} onClick={() => handlePreschoolers()}>
                        <img className={bgImg} src={btnFiveYear} alt="btn background" />
                        <p className={text}>
                            <span>3-5</span>
                            <span>Years</span>
                        </p>
                    </li>
                    <li className={item} onClick={() => handleEarlyElementary()}>
                        <img className={bgImg} src={btnEightYear} alt="btn background" />
                        <p className={text}>
                            <span>5-8</span>
                            <span>Years</span>
                        </p>
                    </li>
                </ul>
            </div>
            <div className={productListContainer}>
                {
                    infants ? 
                    infantsProducts.map((data) => (
                        <div key={data.id} className={cardContainer}>
                            <ProductCard name={data.title} price={data.price}/>
                        </div>
                    )) : 
                    toddlers ?
                    toddlersProducts.map((data) => (
                        <div key={data.id} className={cardContainer}>
                            <ProductCard name={data.title} price={data.price}/>
                        </div>
                    )) :
                    preschoolers ?
                    preschoolersProducts.map((data) => (
                        <div key={data.id} className={cardContainer}>
                            <ProductCard name={data.title} price={data.price}/>
                        </div>
                    )) :
                    earlyElementary ?
                    earlyElementaryProducts.map((data) => (
                        <div key={data.id} className={cardContainer}>
                            <ProductCard name={data.title} price={data.price}/>
                        </div>
                    )) : ""
                }
            </div>
        </div>
    );
};

export default ProductsListSection;
