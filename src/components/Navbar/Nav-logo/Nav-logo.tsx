import React from 'react';
import { Link } from 'react-router-dom';

import SUMLogo from './../../../assets/SUM_no_text.png';
import SUMText from './../../../assets/SUM_text.png';
import './Nav-logo.scss';

const NavLogo = () => (
	<div className="Nav-logo">
		<Link to="/" className="logo-holder row">
			<img src={SUMLogo} className="logo" alt="SUM logo" />
			{/* <img
				src={SUMText}
				className="logo-text"
				alt="Sport Utility Marine"
			/> */}
		</Link>
	</div>
);
export default NavLogo;
