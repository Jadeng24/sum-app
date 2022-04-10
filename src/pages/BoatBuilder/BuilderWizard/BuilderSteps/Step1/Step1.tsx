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
import BoatSlideInfo from './BoatSlideInfo/BoatSlideInfo';
import {
    isDesktop,
    isMobile,
} from '../../../../../components/Devices/MediaQuery';
import { Mobile } from '../../../../../components/Devices/Mobile';
import { TabletAndMobile } from '../../../../../components/Devices/TabletAndMobile';
import { Desktop } from '../../../../../components/Devices/Desktop';
import { Tablet } from '../../../../../components/Devices/Tablet';

const Step1 = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    const [boats, setBoats] = useState([]);
    const [selectedBoat, setSelectedBoat] = useState(boats[0]);
    const slideTo = (eventObj) => {
        if (eventObj.isPrev) {
            swiperRef.slideTo(swiperRef.activeIndex - 1);
        }
    };

    const getBoats = async () => {
        const response = await fetch('/api/boats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        const result = await response.json();
        setBoats(result.data);
        setSelectedBoat(result.data[0]);
    };
    const handleBoatSelection = () => {
        setSelectedBoat(boats[swiperRef.realIndex]);
    };

    useEffect(() => {
        getBoats();
    }, []);

    useEffect(() => {
        console.log(selectedBoat);
    }, [selectedBoat]);
    return (
        <div className="wizardStep carousel-holder flex">
            <Mobile>
                <div className="mobile-floor-border floor-border flex">
                    <div className="floor-circle flex" />
                </div>
            </Mobile>
            <Tablet>
                <div className="tablet-floor-border floor-border flex">
                    <div className="floor-circle flex" />
                </div>
            </Tablet>
            <Desktop>
                <div className="floor-border flex">
                    <div className="floor-circle flex" />
                </div>
            </Desktop>

            <Swiper
                onSwiper={setSwiperRef}
                modules={[Virtual]}
                initialSlide={0}
                spaceBetween={10}
                slidesPerView={3}
                onSlideChange={() => handleBoatSelection()}
                grabCursor
                loop
                slideToClickedSlide
                centeredSlides
            >
                {boats.map((boat, index) => (
                    <SwiperSlide key={boat.id} virtualIndex={index}>
                        {({ isActive }) => {
                            return (
                                <div>
                                    <BoatSlide
                                        boatImg={boat.featured_image}
                                        type={boat.type}
                                        name={boat.name}
                                        length={boat.length}
                                        model={boat.model}
                                    />
                                    {isActive && (
                                        <BoatSlideInfo
                                            name={boat.name}
                                            length={boat.length}
                                        />
                                    )}
                                </div>
                            );
                        }}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Step1;
