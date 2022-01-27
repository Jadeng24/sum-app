import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav-Links-Mobile.scss';
interface NavLinksMobileProps {
	isActive: boolean;
	onChange: (value: boolean) => void;
}
const NavLinksMobile = (props: NavLinksMobileProps) => {
	const { isActive, onChange } = props;

	const closeModal = () => {
		onChange(!isActive);
	};
	return (
		<div
			className={`flex column mobile-links nav-links ${
				isActive ? 'active' : ''
			}`}
		>
			<NavLink
				to="/boats"
				onClick={closeModal}
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				Boats
			</NavLink>
			<NavLink
				to="/shop"
				onClick={closeModal}
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				Shop
			</NavLink>
			<NavLink
				to="/about"
				onClick={closeModal}
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				About
			</NavLink>
			<NavLink
				to="/contact"
				onClick={closeModal}
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				Contact
			</NavLink>
		</div>
	);
};

export default NavLinksMobile;
