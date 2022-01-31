/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useWizard } from 'react-use-wizard';
import { GoChevronRight } from 'react-icons/go';

import './Builder-Footer.scss';

interface BuilderFooterProps {
    labels: string[];
}
const BuilderFooter = (props) => {
    const { labels } = props;
    const { previousStep, nextStep, activeStep } = useWizard();
    return (
        <div className="Builder-Footer flex">
            <div className="footer-section flex">MSRP $5000</div>
            <div
                className="footer-section footer-right-section flex clickable touch"
                onClick={() => nextStep()}
            >
                <div className="next-button column">
                    <span className="next-text">Next</span>
                    <span>{labels[activeStep + 1]}</span>
                </div>
                <GoChevronRight />
            </div>
        </div>
    );
};

export default BuilderFooter;
