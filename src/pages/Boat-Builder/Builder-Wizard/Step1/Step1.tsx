import React from 'react';
import Carousel from 'react-spring-3d-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import { config } from 'react-spring';
import boat from '../../../../assets/boat.png';

import './Step1.scss';

const Step1 = () => {
    const slides = [
        {
            key: 1,
            content: <img className="boat-picker" src={boat} alt="boat" />,
        },
        {
            key: 2,
            content: <img className="boat-picker" src={boat} alt="boat" />,
        },
        {
            key: 3,
            content: <img className="boat-picker" src={boat} alt="boat" />,
        },
        {
            key: 4,
            content: <img className="boat-picker" src={boat} alt="boat" />,
        },
        {
            key: 5,
            content: <img className="boat-picker" src={boat} alt="boat" />,
        },
        {
            key: 6,
            content: <img className="boat-picker" src={boat} alt="boat" />,
        },
        {
            key: 7,
            content: <img className="boat-picker" src={boat} alt="boat" />,
        },
    ];
    const showNavigation = false;
    const goToSlide = 0;
    const offsetRadius = 2;
    return (
        <div className="wizardStep carousel-holder">
            <Carousel
                slides={slides}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showNavigation}
                animationConfig={config}
            />
        </div>
    );
};

export default Step1;
