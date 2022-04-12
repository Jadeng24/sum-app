/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useWizard } from 'react-use-wizard';
import { GoChevronRight } from 'react-icons/go';

import './BuilderFooter.scss';
import { Link } from 'react-router-dom';

interface BuilderFooterProps {
    labels: string[];
}
const BuilderFooter = (props) => {
    const { labels } = props;
    const { previousStep, nextStep, activeStep } = useWizard();

    return (
        <div className="BuilderFooter flex">
            <div className="footer-section flex">
                <div className="footer-button column">
                    <span className="small-text">Total MSRP</span>
                    {labels && activeStep !== labels.length - 1 && (
                        <span className="footer-price">$25,385</span>
                    )}
                </div>
            </div>
            <div
                className="footer-section footer-right-section flex clickable touch"
                onClick={() => nextStep()}
            >
                <div className="footer-button column">
                    <span className="small-text">Next</span>
                    {labels && activeStep !== labels.length - 1 && (
                        <span>{labels[activeStep + 1]}</span>
                    )}
                </div>
                <GoChevronRight />
            </div>
        </div>
    );
};

export default BuilderFooter;
