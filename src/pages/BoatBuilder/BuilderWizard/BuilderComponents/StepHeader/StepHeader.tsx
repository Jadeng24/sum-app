import React from 'react';
import './StepHeader.scss';

interface StepHeaderProps {
    step: string;
    title: string;
}
const StepHeader = (props: StepHeaderProps) => {
    const { step, title } = props;
    return (
        <div className="StepHeader column">
            <div className="header-title">{title}</div>
            <div className="step-text">{step.toUpperCase()}</div>
        </div>
    );
};

export default StepHeader;
