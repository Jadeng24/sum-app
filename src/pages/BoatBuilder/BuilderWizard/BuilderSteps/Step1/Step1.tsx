/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper';
import 'swiper/css/bundle';

import aluminumBoat from '../../../../../assets/boat.png';
import inflatableBoat from '../../../../../assets/boat2.png';

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
            boatImg: aluminumBoat,
            title: 'Aluminum Jetboat',
            length: 10,
            model: 'aluminum',
            id: 1,
        },
        {
            boatImg: aluminumBoat,
            title: 'Aluminum Jetboat',
            length: 12,
            model: 'aluminum',
            id: 2,
        },
        {
            boatImg: aluminumBoat,
            title: 'Aluminum Jetboat',
            length: 14,
            model: 'aluminum',
            id: 3,
        },
        {
            boatImg: inflatableBoat,
            title: 'Inflatable Race boat',
            length: 10,
            model: 'inflatable',
            id: 1,
        },
        {
            boatImg: inflatableBoat,
            title: 'Inflatable Race boat',
            length: 12,
            model: 'inflatable',
            id: 2,
        },
        {
            boatImg: inflatableBoat,
            title: 'Inflatable Race boat',
            length: 14,
            model: 'inflatable',
            id: 3,
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
