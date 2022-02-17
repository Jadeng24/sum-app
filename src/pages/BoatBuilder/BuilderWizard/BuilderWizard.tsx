import React from 'react';
import { Wizard } from 'react-use-wizard';
import BuilderFooter from '../BuilderFooter/BuilderFooter';

import Tabs from '../../../components/Tabs/Tabs';
import Step1 from './BuilderSteps/Step1/Step1';
import Step2 from './BuilderSteps/Step2/Step2';
import Step3 from './BuilderSteps/Step3/Step3';
import Step4 from './BuilderSteps/Step4/Step4';
import Step5 from './BuilderSteps/Step5/Step5';

import './BuilderWizard.scss';

const BuilderWizard = () => {
    const wizardStepLabels = [
        'Model',
        'Exterior',
        'Interior',
        'Accessories',
        'Summary',
    ];
    return (
        <div className="BuilderWizard touch">
            <Wizard
                header={<Tabs labels={wizardStepLabels} />}
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
