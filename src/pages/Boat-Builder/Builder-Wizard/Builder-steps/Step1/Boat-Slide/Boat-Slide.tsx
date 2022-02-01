import React from 'react';

import './Boat-Slide.scss';

interface BoatSlideProps {
    boatImg: string;
    title: string;
    model: string;
    length: number;
    isActive: boolean;
}
const BoatSlide = (props: BoatSlideProps) => {
    const { boatImg, title, model, length, isActive } = props;
    return (
        <div className={`Boat-Slide column ${isActive ? 'isActive' : ''}`}>
            <img className="boat-image" src={boatImg} alt={title} />
            <div>{title}</div>
            <div>{length}</div>
            <div>{model}</div>
        </div>
    );
};

export default BoatSlide;
