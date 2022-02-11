/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import LoginModal from '../../Login-Modal/Login-Modal';

const NavIcons = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="flex">
            <MdShoppingCart size="30px" style={{ cursor: 'pointer' }} />
            <div className="flex">
                {localStorage.getItem('currentUser') ? (
                    <img
                        onClick={openModal}
                        className="profilePic clickable"
                        src={localStorage.getItem('profilePic') || ''}
                        alt="googlepic"
                    />
                ) : (
                    <button type="button" onClick={openModal}>
                        Login / Create account
                    </button>
                )}
            </div>
            <LoginModal
                modalIsOpen={modalIsOpen}
                afterOpenModal={afterOpenModal}
                closeModal={closeModal}
            />
        </div>
    );
};

export default NavIcons;
