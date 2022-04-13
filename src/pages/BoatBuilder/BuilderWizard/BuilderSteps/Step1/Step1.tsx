/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper';
import 'swiper/css/bundle';

import './Step1.scss';
import BoatSlide from './BoatSlide/BoatSlide';
import BoatSlideInfo from './BoatSlideInfo/BoatSlideInfo';

import { Mobile } from '../../../../../components/Devices/Mobile';
import { Desktop } from '../../../../../components/Devices/Desktop';
import { Tablet } from '../../../../../components/Devices/Tablet';
import { Boat } from '../../../../../types/Types';

interface Step1Props {
    boats: Boat[];
    selectedBoat: Boat;
    initialBoatIndex: number;
    onBoatSelection: (boat: Boat) => void;
}
const Step1 = (props: Step1Props) => {
    const { boats, initialBoatIndex, onBoatSelection, selectedBoat } = props;
    const [swiperRef, setSwiperRef] = useState(null);

    const slideTo = (eventObj) => {
        if (eventObj.isPrev) {
            swiperRef.slideTo(swiperRef.activeIndex - 1);
        }
    };

    const handleBoatSelection = () => {
        if (boats && swiperRef) onBoatSelection(boats[swiperRef.realIndex]);
    };

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
            {boats && (
                <Swiper
                    onSwiper={setSwiperRef}
                    modules={[Virtual]}
                    initialSlide={initialBoatIndex}
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
            )}
        </div>
    );
};

export default Step1;
