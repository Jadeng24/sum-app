import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../Login-Modal/Login-Modal';

import NavLogo from './Nav-logo/Nav-logo';

import './Nav.scss';

const Nav = () => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	const openModal = () => {
		setIsOpen(true);
	};
	const afterOpenModal = () => {
		// references are now sync'd and can be accessed.
		console.log('modal is opened');
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<nav>
			<NavLogo />
			<div className="nav-links">
				<Link to="/boats">Boats</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
				<Link className="build-link" to="/boat-builder">
					Build
				</Link>

				<div>
					<button onClick={openModal}>Open Modal</button>
					{/* // modal  */}
					<LoginModal
						modalIsOpen={modalIsOpen}
						afterOpenModal={afterOpenModal}
						closeModal={closeModal}
					/>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
