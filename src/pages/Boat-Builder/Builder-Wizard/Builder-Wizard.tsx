import React from 'react';
import { Wizard } from 'react-use-wizard';
import BuilderFooter from '../Builder-Footer/Builder-Footer';

import BuilderNav from '../Builder-Nav/Builder-Nav';
import Step1 from './Builder-steps/Step1/Step1';
import Step2 from './Builder-steps/Step2/Step2';
import Step3 from './Builder-steps/Step3/Step3';
import Step4 from './Builder-steps/Step4/Step4';
import Step5 from './Builder-steps/Step5/Step5';

import './Builder-Wizard.scss';

const BuilderWizard = () => {
    const wizardStepLabels = [
        'Model',
        'Exterior',
        'Interior',
        'Accessories',
        'Summary',
    ];
    return (
        <div className="Builder-Wizard touch">
            <Wizard
                header={<BuilderNav labels={wizardStepLabels} />}
                footer={<BuilderFooter labels={wizardStepLabels} />}
            >
                <Step1 />
                <Step2 />
                <Step3 />
                <Step4 />
                <Step5 />
            </Wizard>
        </div>
    );
};

export default BuilderWizard;
