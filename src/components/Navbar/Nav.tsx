import React from 'react';
import { Link } from 'react-router-dom';

import NavLogo from './Nav-logo/Nav-logo';

import './Nav.scss';

const Nav = () => {
	return (
		<nav>
			<NavLogo />
			<div className="nav-links">
				<Link to="/boats">Boats</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</div>
		</nav>
	);
};
export default Nav;
