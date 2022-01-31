import React from 'react';

import './Boat-Builder.scss';

import BuilderWizard from './Builder-Wizard/Builder-Wizard';

const BoatBuilder = () => {
    return (
        <div className="Boat-Builder">
            <BuilderWizard />
        </div>
    );
};

export default BoatBuilder;
