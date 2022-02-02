/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

import aluminumBoat from '../../../../../assets/boat.png';
import inflatableBoat from '../../../../../assets/boat2.png';

import './Step1.scss';
import BoatSlide from './Boat-Slide/Boat-Slide';

const Step1 = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const slideTo = (eventObj) => {
        console.log(eventObj);
        if (eventObj.isPrev) {
            swiperRef.slideTo(swiperRef.activeIndex - 1);
        }
        // swiperRef.slideTo(index - 1, 0);
    };

    return (
        <div className="wizardStep carousel-holder flex">
            <div className="boat-floor" />
            <Swiper
                onSwiper={setSwiperRef}
                initialSlide={0}
                spaceBetween={10}
                slidesPerView={3}
                // onSlideChange={() => console.log('slide change')}
                grabCursor
                loop
                slideToClickedSlide
                centeredSlides
            >
                <SwiperSlide>
                    <BoatSlide
                        boatImg={aluminumBoat}
                        title="Aluminum Jetboat"
                        length={10}
                        model="aluminum"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BoatSlide
                        boatImg={aluminumBoat}
                        title="Aluminum Jetboat"
                        length={12}
                        model="aluminum"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BoatSlide
                        boatImg={aluminumBoat}
                        title="Aluminum Jetboat"
                        length={14}
                        model="aluminum"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BoatSlide
                        boatImg={inflatableBoat}
                        title="Inflatable Raceboat"
                        length={10}
                        model="inflatable"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BoatSlide
                        boatImg={inflatableBoat}
                        title="Inflatable Raceboat"
                        length={12}
                        model="inflatable"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <BoatSlide
                        boatImg={inflatableBoat}
                        title="Inflatable Raceboat"
                        length={14}
                        model="inflatable"
                    />
                </SwiperSlide>
                ƒ
            </Swiper>
        </div>
    );
};

export default Step1;
