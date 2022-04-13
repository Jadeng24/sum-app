import React, { useEffect } from 'react';
import { isTabletOrMobile } from '../../../../../components/Devices/MediaQuery';
import { Boat } from '../../../../../types/Types';
import StepHeader from '../../BuilderComponents/StepHeader/StepHeader';

import './Step2.scss';

interface Step2Props {
    boat: Boat;
}

const Step2 = (props: Step2Props) => {
    const { boat } = props;

    useEffect(() => {
        console.log(boat);
    }, [boat]);
    return (
        <div
            className={`wizardStep step-content 
            ${
                isTabletOrMobile()
                    ? 'column isTabletOrMobile'
                    : 'row space-between'
            }`}
        >
            <div className="boat-preview flex">
                {boat && (
                    <img
                        className="boat-image"
                        src={boat.images[1]}
                        alt={boat.name}
                    />
                )}
            </div>
            <div className="options-wrapper column">
                <StepHeader title={`Build your ${boat.name}`} step="Exterior" />
            </div>
        </div>
    );
};

export default Step2;
