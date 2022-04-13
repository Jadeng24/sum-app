import React from 'react';
import { Boat } from '../../../../../types/Types';

interface Step5Props {
    boat: Boat;
}
const Step5 = (props: Step5Props) => {
    const { boat } = props;
    return (
        <div className="wizardStep step-content">
            <div>Summary Step</div>
        </div>
    );
};

export default Step5;
