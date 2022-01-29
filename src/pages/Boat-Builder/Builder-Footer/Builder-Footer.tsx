import React from 'react';
import { Wizard, useWizard } from 'react-use-wizard';

const BuilderFooter = () => {
	const { handleStep, previousStep, nextStep } = useWizard();
	return (
		<div>
			<button onClick={() => previousStep()}>Previous</button>
			<button onClick={() => nextStep()}>Next</button>
		</div>
	);
};

export default BuilderFooter;
