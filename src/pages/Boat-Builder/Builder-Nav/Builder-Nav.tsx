/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Builder-Nav.scss';
import { useWizard } from 'react-use-wizard';

const BuilderNav = () => {
    const { goToStep } = useWizard();
    return (
        <div className="Builder-Nav flex">
            <span onClick={() => goToStep(0)}>Boat Model</span>
            <span onClick={() => goToStep(1)}>Color & decals</span>
            <span onClick={() => goToStep(2)}>Seating</span>
            <span onClick={() => goToStep(3)}>Accessories</span>
            <span onClick={() => goToStep(4)}>Overview</span>
        </div>
    );
};

export default BuilderNav;
