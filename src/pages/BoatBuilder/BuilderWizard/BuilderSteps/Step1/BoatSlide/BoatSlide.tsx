import React from 'react';
import { Desktop } from '../../../../../../components/Devices/Desktop';
import { Mobile } from '../../../../../../components/Devices/Mobile';
import { Tablet } from '../../../../../../components/Devices/Tablet';
import { TabletAndMobile } from '../../../../../../components/Devices/TabletAndMobile';
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
            <Desktop>
                <img
                    className="desktop-boat-image boat-image"
                    src={boatImg}
                    alt={name}
                />
            </Desktop>
            <Tablet>
                <img className="boat-image" src={boatImg} alt={name} />
            </Tablet>
            <Mobile>
                <img
                    className="mobile-boat-image boat-image"
                    src={boatImg}
                    alt={name}
                />
            </Mobile>

            {/* <BoatSlideInfo name={name} length={length} /> */}
        </div>
    );
};

export default BoatSlide;
