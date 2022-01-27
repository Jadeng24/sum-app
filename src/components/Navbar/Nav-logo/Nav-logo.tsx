import React from 'react';
import { Link } from 'react-router-dom';

import { matchPath } from 'react-router';
import { TabletAndMobile } from '../../Devices/TabletAndMobile';

import SUMLogo from './../../../assets/SUM_no_text.png';
import SUMText from './../../../assets/SUM_text.png';
import './Nav-logo.scss';

interface NavLogoProps {
	isActive: boolean;
	onChange: (value: boolean) => void;
}

const NavLogo = (props: NavLogoProps) => {
	const { isActive, onChange } = props;

	const handleChange = () => {
		if (isActive) {
			onChange(!isActive);
		}
	};

	return (
		<div className="Nav-logo">
			<Link to="/" className="logo-holder row" onClick={handleChange}>
				<img src={SUMLogo} className="logo" alt="SUM logo" />
				<TabletAndMobile>
					<img
						src={SUMText}
						className="logo-text"
						alt="Sport Utility Marine"
					/>
				</TabletAndMobile>
			</Link>
		</div>
	);
};
export default NavLogo;
