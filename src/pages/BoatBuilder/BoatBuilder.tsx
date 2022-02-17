import React from 'react';

import './BoatBuilder.scss';

import BuilderWizard from './BuilderWizard/BuilderWizard';

const BoatBuilder = () => {
    return (
        <div className="BoatBuilder">
            <BuilderWizard />
        </div>
    );
};

export default BoatBuilder;
