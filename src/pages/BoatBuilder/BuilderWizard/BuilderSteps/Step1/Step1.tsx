/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper';
import 'swiper/css/bundle';

import centerConsole4 from '../../../../../assets/console4-t.png';
import sport4 from '../../../../../assets/sport4-t.png';

import './Step1.scss';
import BoatSlide from './BoatSlide/BoatSlide';

const Step1 = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const slideTo = (eventObj) => {
        if (eventObj.isPrev) {
            swiperRef.slideTo(swiperRef.activeIndex - 1);
        }
    };
    const boats = [
        {
            boatImg: centerConsole4,
            title: 'Center Console Jetboat',
            length: 13.5,
            model: 'centerConsole',
            id: 1,
        },
        {
            boatImg: centerConsole4,
            title: 'Center Console Jetboat',
            length: 13.5,
            model: 'centerConsole',
            id: 2,
        },
        {
            boatImg: sport4,
            title: 'Sport Race Jetboat',
            length: 10,
            model: 'centerConsole',
            id: 3,
        },
        {
            boatImg: sport4,
            title: 'Sport Race Jetboat',
            length: 13.5,
            model: 'sport',
            id: 4,
        },
    ];

    return (
        <div className="wizardStep carousel-holder flex">
            <div className="boat-floor" />

            <Swiper
                onSwiper={setSwiperRef}
                modules={[Virtual]}
                initialSlide={0}
                spaceBetween={10}
                slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                grabCursor
                loop
                slideToClickedSlide
                centeredSlides
            >
                {boats.map((boat, index) => (
                    <SwiperSlide key={boat.id} virtualIndex={index}>
                        <BoatSlide
                            boatImg={boat.boatImg}
                            title={boat.title}
                            length={boat.length}
                            model={boat.model}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Step1;
