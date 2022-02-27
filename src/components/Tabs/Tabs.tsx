/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Tabs.scss';
import { useWizard } from 'react-use-wizard';

interface TabsProps {
    labels: string[];
}
const Tabs = (props: TabsProps) => {
    const { labels } = props;
    const { goToStep, activeStep } = useWizard();

    return (
        <div className="Builder-Nav column">
            <div className="flex">
                {labels &&
                    labels.map((label, index) => {
                        return (
                            <span
                                className={activeStep === index ? 'active' : ''}
                                onClick={() => goToStep(index)}
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