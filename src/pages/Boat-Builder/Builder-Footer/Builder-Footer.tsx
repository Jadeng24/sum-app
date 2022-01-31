import React from 'react';
import { useWizard } from 'react-use-wizard';

const BuilderFooter = () => {
    const { previousStep, nextStep } = useWizard();
    return (
        <div>
            <button type="button" onClick={() => previousStep()}>
                Previous
            </button>
            <button type="button" onClick={() => nextStep()}>
                Next
            </button>
        </div>
    );
};

export default BuilderFooter;
