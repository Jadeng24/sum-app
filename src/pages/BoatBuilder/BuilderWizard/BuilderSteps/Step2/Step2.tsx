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
                        src={boat.featured_image}
                        alt={boat.name}
                    />
                )}
            </div>
            <div className="options-wrapper column">
                <StepHeader title={`Build your ${boat.name}`} step="Exterior" />
                <div>option 1</div>
                <div>option 2</div>
                <div>option 3</div>
                <div>option 4</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
                <div>option 1</div>
            </div>
        </div>
    );
};

export default Step2;
