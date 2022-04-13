import React from 'react';
import { isTabletOrMobile } from '../../../../../components/Devices/MediaQuery';
import { Boat } from '../../../../../types/Types';
import StepHeader from '../../BuilderComponents/StepHeader/StepHeader';

interface Step4Props {
    boat: Boat;
}

const Step4 = (props: Step4Props) => {
    const { boat } = props;
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
                <StepHeader
                    title="Time to add those final details."
                    step="Accessories"
                />
            </div>
        </div>
    );
};

export default Step4;
