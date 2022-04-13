import React from 'react';
import { isTabletOrMobile } from '../../../../../components/Devices/MediaQuery';
import { Boat } from '../../../../../types/Types';
import StepHeader from '../../BuilderComponents/StepHeader/StepHeader';

interface Step3Props {
    boat: Boat;
}

const Step3 = (props: Step3Props) => {
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
                        src={boat.images[2]}
                        alt={boat.name}
                    />
                )}
            </div>
            <div className="options-wrapper column">
                <StepHeader
                    title="Customize seating, cockpit, and more."
                    step="Interior"
                />
            </div>
        </div>
    );
};

export default Step3;
