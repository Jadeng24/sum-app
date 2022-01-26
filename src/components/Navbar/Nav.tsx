import React from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../Login-Modal/Login-Modal';

import NavLogo from './Nav-logo/Nav-logo';
import { signInWithGoogle } from '../../Firebase/Firebase';

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

				<div>
					{/* // modal  */}

					{localStorage.getItem('currentUser') ? (
						<img
							onClick={openModal}
							className="profilePic clickable"
							src={localStorage.getItem('profilePic') || ''}
							alt="googlepic"
						/>
					) : (
						<button onClick={openModal}>Open Modal</button>
					)}
				</div>

				<Link className="build-link" to="/boat-builder">
					Build
				</Link>

				<LoginModal
					modalIsOpen={modalIsOpen}
					afterOpenModal={afterOpenModal}
					closeModal={closeModal}
				/>
			</div>
		</nav>
	);
};
export default Nav;
