import React from 'react';
import { Wizard } from 'react-use-wizard';
import BuilderFooter from '../Builder-Footer/Builder-Footer';

import BuilderNav from '../Builder-Nav/Builder-Nav';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';

const BuilderWizard = () => {
	return (
		<Wizard header={<BuilderNav />} footer={<BuilderFooter />}>
			<Step1 />
			<Step2 />
		</Wizard>
	);
};

export default BuilderWizard;
