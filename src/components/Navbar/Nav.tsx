import React from 'react';

import NavLogo from './Nav-logo/Nav-logo';

import './Nav.scss';
import NavLinks from './Nav-Links/Nav-Links';
import { Mobile } from '../Devices/Mobile';
import { Desktop } from '../Devices/Desktop';
import { Tablet } from '../Devices/Tablet';
import HamburgerMenu from './Hamburger-Menu/Hamburger-Menu';
import { TabletAndMobile } from '../Devices/TabletAndMobile';

const Nav = () => {
	return (
		<nav>
			<NavLogo />
			<Desktop>
				<NavLinks />
			</Desktop>
			<TabletAndMobile>
				<HamburgerMenu />
			</TabletAndMobile>
		</nav>
	);
};
export default Nav;
