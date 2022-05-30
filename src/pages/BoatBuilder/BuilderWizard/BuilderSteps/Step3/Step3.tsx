import React, { useEffect, useState } from 'react';
import { isTabletOrMobile } from '../../../../../components/Devices/MediaQuery';
import { Boat } from '../../../../../types/Types';
import StepLoader from '../../../StepLoader/StepLoader';
import StepHeader from '../../BuilderComponents/StepHeader/StepHeader';

import './Step3.scss';

interface Step3Props {
    boat: Boat;
}

const Step3 = (props: Step3Props) => {
    const { boat } = props;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [boat]);

    return (
        <>
            {isLoading && <StepLoader />}
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
                        title="Customize seating, cockpit, and more."
                        step="Interior"
                    />
                </div>
            </div>
        </>
    );
};

export default Step3;
