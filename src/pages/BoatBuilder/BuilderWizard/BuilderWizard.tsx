import React, { useEffect, useState } from 'react';
import { Wizard } from 'react-use-wizard';
import BuilderFooter from '../BuilderFooter/BuilderFooter';

import Tabs from '../../../components/Tabs/Tabs';
import Step1 from './BuilderSteps/Step1/Step1';
import Step2 from './BuilderSteps/Step2/Step2';
import Step3 from './BuilderSteps/Step3/Step3';
import Step4 from './BuilderSteps/Step4/Step4';
import Step5 from './BuilderSteps/Step5/Step5';

import './BuilderWizard.scss';

const wizardStepLabels = [
    'Model',
    'Exterior',
    'Interior',
    'Accessories',
    'Summary',
];

const BuilderWizard = () => {
    const [selectedBoat, setSelectedBoat] = useState(null);
    const [boats, setBoats] = useState([]);
    const [initialBoatIndex, setInitialBoatIndex] = useState(0);

    const handleBoatSelection = (boatSelection) => {
        setSelectedBoat(boatSelection);
        setInitialBoatIndex(() => {
            const index = boats.findIndex(
                (boat) => boat.id === selectedBoat.id
            );
            if (index === -1) return 0;
            return index;
        });
    };

    const getBoats = async () => {
        const response = await fetch('/api/boats', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });
        const result = await response.json();
        setBoats(result.data);
        setSelectedBoat(result.data[0]);
    };

    useEffect(() => {
        const index = boats.findIndex((boat) => boat.id === selectedBoat.id);
        setInitialBoatIndex(index);
    }, [selectedBoat]);

    useEffect(() => {
        getBoats();
    }, []);
    return (
        <div className="BuilderWizard touch">
            <Wizard
                header={<Tabs labels={wizardStepLabels} />}
                footer={
                    <BuilderFooter
                        labels={wizardStepLabels}
                        price={selectedBoat?.price}
                    />
                }
            >
                <Step1
                    boats={boats}
                    selectedBoat={selectedBoat}
                    initialBoatIndex={initialBoatIndex}
                    onBoatSelection={(boat) => handleBoatSelection(boat)}
                />
                <Step2 boat={selectedBoat} />
                <Step3 boat={selectedBoat} />
                <Step4 boat={selectedBoat} />
                <Step5 boat={selectedBoat} />
            </Wizard>
        </div>
    );
};

export default BuilderWizard;
