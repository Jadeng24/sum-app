import React from 'react';

import './BoatSlide.scss';

interface BoatSlideProps {
    boatImg: string;
    title: string;
    model: string;
    length: number;
}
const BoatSlide = (props: BoatSlideProps) => {
    const { boatImg, title, model, length } = props;
    return (
        <div className="BoatSlide column">
            <img className="boat-image" src={boatImg} alt={title} />
            <div>{title}</div>
            <div>{length}</div>
            <div>{model}</div>
        </div>
    );
};

export default BoatSlide;