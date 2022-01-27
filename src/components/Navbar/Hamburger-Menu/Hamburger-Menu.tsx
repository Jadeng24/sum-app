import React, { useState } from 'react';

import './Hamburger-Menu.scss';
const HamburgerMenu = () => {
	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};
	return (
		<div id="menu" onClick={toggleClass} className={isActive ? 'open' : ''}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
};

export default HamburgerMenu;
