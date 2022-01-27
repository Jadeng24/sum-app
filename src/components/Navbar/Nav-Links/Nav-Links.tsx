import React from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from '../../Login-Modal/Login-Modal';

const NavLinks = () => {
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
		<div className="nav-links">
			<NavLink
				to="/boats"
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				Boats
			</NavLink>
			<NavLink
				to="/shop"
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				Shop
			</NavLink>
			<NavLink
				to="/about"
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				About
			</NavLink>
			<NavLink
				to="/contact"
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				Contact
			</NavLink>

			<div>
				{/* // modal  */}

				{/* {localStorage.getItem('currentUser') ? (
						<img
							onClick={openModal}
							className="profilePic clickable"
							src={localStorage.getItem('profilePic') || ''}
							alt="googlepic"
						/>
					) : (
						<button onClick={openModal}>Open Modal</button>
					)} */}
			</div>

			<NavLink className="build-link" to="/boat-builder">
				Build
			</NavLink>
			<LoginModal
				modalIsOpen={modalIsOpen}
				afterOpenModal={afterOpenModal}
				closeModal={closeModal}
			/>
		</div>
	);
};

export default NavLinks;
