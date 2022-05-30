import React, { useEffect, useState } from 'react';
import { Boat } from '../../../../../types/Types';
import StepLoader from '../../../StepLoader/StepLoader';
import './Step5.scss';

interface Step5Props {
    boat: Boat;
}
const Step5 = (props: Step5Props) => {
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
            <div className="wizardStep step-content Step5">
                <h2>Summary Step</h2>
                <img
                    className="boat-image"
                    src={boat.featured_image}
                    alt={boat.name}
                />
                <div>{boat.name}</div>
                <div>{boat.length}</div>
                <div>{boat.model}</div>
                <div>{boat.description}</div>
            </div>
        </>
    );
};

export default Step5;
