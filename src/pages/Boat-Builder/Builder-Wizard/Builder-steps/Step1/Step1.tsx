import React, { useEffect, useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import { config } from 'react-spring';
import aluminumBoat from '../../../../../assets/boat.png';
import inflatableBoat from '../../../../../assets/boat2.png';

import './Step1.scss';
import BoatSlide from './Boat-Slide/Boat-Slide';

const Step1 = () => {
    const slides = [
        {
            key: 1,
            content: (
                <BoatSlide
                    boatImg={aluminumBoat}
                    title="Aluminum Jetboat"
                    length={10}
                    model="aluminum"
                />
            ),
        },
        {
            key: 2,
            content: (
                <BoatSlide
                    boatImg={aluminumBoat}
                    title="Aluminum Jetboat"
                    length={12}
                    model="aluminum"
                />
            ),
        },
        {
            key: 3,
            content: (
                <BoatSlide
                    boatImg={aluminumBoat}
                    title="Aluminum Jetboat"
                    length={14}
                    model="aluminum"
                />
            ),
        },
        {
            key: 4,
            content: (
                <BoatSlide
                    boatImg={inflatableBoat}
                    title="Inflatable Raceboat"
                    length={10}
                    model="inflatable"
                />
            ),
        },
        {
            key: 5,
            content: (
                <BoatSlide
                    boatImg={inflatableBoat}
                    title="Inflatable Raceboat"
                    length={12}
                    model="inflatable"
                />
            ),
        },
        {
            key: 6,
            content: (
                <BoatSlide
                    boatImg={inflatableBoat}
                    title="Inflatable Raceboat"
                    length={14}
                    model="inflatable"
                />
            ),
        },
    ];

    const [goToSlide, setGoToSlide] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const boatArray = slides.map((element, index) => {
        return {
            ...element,
            onClick: () => setGoToSlide(index),
        };
    });
    const [boats] = useState(boatArray);

    const showNavigation = false;
    const offsetRadius = 2;
    useEffect(() => {
        setGoToSlide(slides[0]);
        setCurrentSlide(0);
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                // left
                case 37:
                    if (currentSlide === 0) {
                        // setGoToSlide(slides[slides.length - 1]);
                        setCurrentSlide(slides[slides.length - 1].key);
                        console.log(slides[slides.length - 1].key);
                    } else {
                        setCurrentSlide(currentSlide - 1);
                    }

                    break;
                // right
                case 39:
                    if (currentSlide === slides[slides.length - 1].key) {
                        setCurrentSlide(0);
                    } else {
                        setCurrentSlide(currentSlide + 1);
                    }
                    // if (goToSlide === slides[slides.length - 1]) {
                    //     setGoToSlide(0);
                    // } else {
                    //     setGoToSlide(goToSlide + 1);
                    // }
                    break;
                default:
                    break;
            }
        });
    }, []);

    return (
        <div className="wizardStep carousel-holder">
            <Carousel
                slides={boats}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showNavigation}
                animationConfig={config.gentle}
            />
        </div>
    );
};

export default Step1;
