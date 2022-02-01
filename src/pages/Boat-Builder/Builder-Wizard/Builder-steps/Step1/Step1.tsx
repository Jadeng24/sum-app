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
    return (
        <div className="wizardStep carousel-holder">
            <Swiper
                spaceBetween={0}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                grabCursor
            >
                <SwiperSlide />
                <SwiperSlide>
                    {({ isNext }) => (
                        <div>
                            <BoatSlide
                                boatImg={aluminumBoat}
                                title="Aluminum Jetboat"
                                length={10}
                                model="aluminum"
                                isActive={isNext}
                            />
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isNext }) => (
                        <div>
                            <BoatSlide
                                boatImg={aluminumBoat}
                                title="Aluminum Jetboat"
                                length={12}
                                model="aluminum"
                                isActive={isNext}
                            />
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isNext }) => (
                        <div>
                            <BoatSlide
                                boatImg={aluminumBoat}
                                title="Aluminum Jetboat"
                                length={14}
                                model="aluminum"
                                isActive={isNext}
                            />
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isNext }) => (
                        <div>
                            <BoatSlide
                                boatImg={inflatableBoat}
                                title="Inflatable Raceboat"
                                length={10}
                                model="inflatable"
                                isActive={isNext}
                            />
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isNext }) => (
                        <div>
                            <BoatSlide
                                boatImg={inflatableBoat}
                                title="Inflatable Raceboat"
                                length={12}
                                model="inflatable"
                                isActive={isNext}
                            />
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isNext }) => (
                        <div>
                            <BoatSlide
                                boatImg={inflatableBoat}
                                title="Inflatable Raceboat"
                                length={14}
                                model="inflatable"
                                isActive={isNext}
                            />
                        </div>
                    )}
                </SwiperSlide>
                <SwiperSlide />
            </Swiper>
        </div>
    );
};

export default Step1;
