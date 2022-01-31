/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Builder-Nav.scss';
import { useWizard } from 'react-use-wizard';
import BuilderNavHeader from './Builder-Nav-Header/Builder-Nav-Header';

interface BuilderNavProps {
    labels: string[];
}
const BuilderNav = (props: BuilderNavProps) => {
    const { labels } = props;
    const { goToStep, activeStep } = useWizard();
    const model = `Aluminum 14'`;
    return (
        <div className="Builder-Nav column">
            <BuilderNavHeader model={model} />
            <div className="flex">
                {labels &&
                    labels.map((label, index) => {
                        return (
                            index > 0 && (
                                <span
                                    className={
                                        activeStep === index ? 'active' : ''
                                    }
                                    onClick={() => goToStep(index)}
                                >
                                    <div>
                                        {index} {label}
                                    </div>
                                </span>
                            )
                        );
                    })}
            </div>
        </div>
    );
};

export default BuilderNav;
