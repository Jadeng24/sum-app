import React, { useEffect, useState } from 'react';
import { isTabletOrMobile } from '../../../../../components/Devices/MediaQuery';
import { Boat } from '../../../../../types/Types';
import StepLoader from '../../../StepLoader/StepLoader';
import StepHeader from '../../BuilderComponents/StepHeader/StepHeader';

interface Step4Props {
    boat: Boat;
}

const Step4 = (props: Step4Props) => {
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
                        title="Time to add those final details."
                        step="Accessories"
                    />
                </div>
            </div>
        </>
    );
};

export default Step4;
