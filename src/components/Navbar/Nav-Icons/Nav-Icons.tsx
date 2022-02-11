/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';
import LoginModal from '../../Login-Modal/Login-Modal';
import LoginButton from './Login-Button/Login-Button';

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
                    <div className="flex">
                        {localStorage.getItem('profilePic') ? (
                            <img
                                onClick={openModal}
                                className="profilePic clickable"
                                src={localStorage.getItem('profilePic') || ''}
                                alt="user"
                            />
                        ) : (
                            <div
                                className="clickable flex"
                                style={{ margin: '0px 8px' }}
                                onClick={openModal}
                            >
                                <FaUserCircle size="40px" />
                            </div>
                        )}
                    </div>
                ) : (
                    <LoginButton handleClick={openModal} />
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
