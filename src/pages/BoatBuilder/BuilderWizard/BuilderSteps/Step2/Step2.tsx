import React, { useEffect } from 'react';
import { Boat } from '../../../../../types/Types';

interface Step2Props {
    boat: Boat;
}

const Step2 = (props: Step2Props) => {
    const { boat } = props;

    useEffect(() => {
        console.log(boat);
    }, [boat]);
    return (
        <div className="wizardStep step-content">
            <div className="boat-slider flex">{boat && boat.name}</div>
            <div className="options-wrapper flex">option 1</div>
        </div>
    );
};

export default Step2;
