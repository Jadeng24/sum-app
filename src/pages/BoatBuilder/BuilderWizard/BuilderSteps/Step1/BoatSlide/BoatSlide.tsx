import React from 'react';
import BoatSlideInfo from '../BoatSlideInfo/BoatSlideInfo';

import './BoatSlide.scss';

interface BoatSlideProps {
    boatImg: string;
    length: number;
    model: string;
    name: string;
    type: string;
}
const BoatSlide = (props: BoatSlideProps) => {
    const { boatImg, length, model, name, type } = props;
    return (
        <div className="BoatSlide column">
            <img className="boat-image" src={boatImg} alt={name} />
            {/* <BoatSlideInfo name={name} length={length} /> */}
        </div>
    );
};

export default BoatSlide;
