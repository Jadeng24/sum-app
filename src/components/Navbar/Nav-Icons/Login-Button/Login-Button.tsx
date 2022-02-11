/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { MdLogin } from 'react-icons/md';

import './Login-Button.scss';

const LoginButton = ({ handleClick }) => {
    const onHandleClick = () => {
        handleClick();
    };
    return (
        <div className="flex Login-Button clickable" onClick={onHandleClick}>
            <span>Login</span> <MdLogin size="22px" />
        </div>
    );
};

export default LoginButton;
