import React from 'react';
import { Link } from 'react-router-dom';

import './Nav-logo.scss';

const NavLogo = () => (
	<div className="Nav-logo">
		<Link to="/" className="logo-holder">
			Logo here
			{/* <img src={DeLogo} className="logo" alt="develoquent logo" />
			<img src={DeText} className="logo-text" alt="develoquent logo" /> */}
		</Link>
	</div>
);
export default NavLogo;
