/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useWizard } from 'react-use-wizard';

import './Tabs.scss';

interface TabsProps {
    labels: string[];
}
const Tabs = (props: TabsProps) => {
    const { labels } = props;
    const { goToStep, activeStep } = useWizard();

    return (
        <div className="Tabs column">
            <div className="flex">
                {labels &&
                    labels.map((label, index) => {
                        return (
                            <span
                                className={activeStep === index ? 'active' : ''}
                                onClick={() => goToStep(index)}
                                key={label}
                            >
                                <div>{label}</div>
                            </span>
                        );
                    })}
            </div>
        </div>
    );
};

export default Tabs;
