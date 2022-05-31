import React, { useEffect, useState } from 'react';
import { isTabletOrMobile } from '../../../../../components/Devices/MediaQuery';
import { Boat } from '../../../../../types/Types';
import StepLoader from '../../../StepLoader/StepLoader';

import './Step5.scss';

interface Step5Props {
    boat: Boat;
}
const Step5 = (props: Step5Props) => {
    const { boat } = props;
    const [isLoading, setIsLoading] = useState(true);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, [boat]);

    return (
        <>
            {isLoading && <StepLoader />}
            <div className="wizardStep step-content Step5 column">
                <div className="summary-background" />
                <div className="summary-content-holder column">
                    <img
                        className="boat-image"
                        src={boat.featured_image}
                        alt={boat.name}
                    />
                    <div className="summary-content column">
                        <div
                            className="summary-section column-center"
                            style={{
                                borderTop: 'none',
                                paddingTop: '0',
                                paddingBottom: '72px',
                            }}
                        >
                            <h4>BUILD SUMMARY</h4>
                            <h2 className="summary-subtitle">
                                You&apos;re almost done!
                            </h2>
                            <div style={{ fontSize: '20px' }}>
                                Review your summary and finalize your custom
                                design
                            </div>
                        </div>

                        <div
                            className="summary-section column"
                            style={{ borderTop: 'none' }}
                        >
                            <h3 style={{ marginBottom: '6px' }}>{boat.name}</h3>
                            <span style={{ fontWeight: 600 }}>
                                {currentYear} {boat.model} {boat.length}&apos;
                            </span>
                        </div>

                        <div
                            className={
                                isTabletOrMobile()
                                    ? 'summary-section column isTabletOrMobile'
                                    : 'summary-section row'
                            } // Indicates whether to show 2 columns side by side or above and below eachother
                        >
                            <div className="spec-column column">
                                <h3 style={{ marginTop: 0 }}>
                                    Your {boat.model} Build Specification
                                </h3>
                            </div>

                            <div className="spec-column spec-list column">
                                {/* Lets break this out into a component  */}
                                <span style={{ fontWeight: 600 }}>
                                    Base MSRP
                                </span>
                                <h4
                                    style={{
                                        margin: 0,
                                        marginBottom: '16px',
                                        borderBottom: 'solid 2px #d2d2d2',
                                    }}
                                >
                                    {currentYear} {boat.name}
                                </h4>
                                here you will find the list of specs and custom
                                selections from each step.
                                <br />
                                <div>{boat.description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step5;
