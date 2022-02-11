/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { MdLogout } from 'react-icons/md';

import googleSignIn from '../../../assets/googleSignIn.jpg';
import facebookSignIn from '../../../assets/facebookSignIn.png';
import googleSignUp from '../../../assets/googleSignUp.jpg';

import './Login-Modal-Content.scss';
import {
    signInWithFacebook,
    signInWithGoogle,
    signOutUser,
} from '../../../Firebase/Firebase';

interface LoginModalContentProps {
    closeModal: () => void;
}
const LoginModalContent = (props: LoginModalContentProps) => {
    const { closeModal } = props;

    const handleSignOut = () => {
        signOutUser().then(() => {
            closeModal();
        });
    };

    const handleSignIn = (withGoogle?: boolean) => {
        if (withGoogle) {
            signInWithGoogle().then(() => {
                closeModal();
            });
        } else {
            signInWithFacebook().then(() => {
                closeModal();
            });
        }
    };
    return (
        <div className="flex column LoginModalContent">
            {localStorage.getItem('currentUser') ? (
                <div>
                    <h1>Logout</h1>
                    <div
                        className="flex Login-Button clickable"
                        onClick={handleSignOut}
                        style={{ margin: 0 }}
                    >
                        <span>Logout</span> <MdLogout size="22px" />
                    </div>
                </div>
            ) : (
                <div className="flex column" style={{ width: '100%' }}>
                    <h1>Login</h1>
                    <img
                        onClick={() => handleSignIn(true)} // add a .then to close the modal
                        className="googleButton"
                        src={googleSignIn}
                        alt="Sign in with Google"
                    />
                    <img
                        onClick={signInWithFacebook} // add a .then to close the modal
                        className="googleButton"
                        src={facebookSignIn}
                        alt="Continue with Facebook"
                    />

                    <div className="flex column registerSection">
                        Don&apos;t have an account?
                        <h1>Register</h1>
                        <img
                            onClick={signInWithGoogle}
                            className="googleButton"
                            src={googleSignUp}
                            alt="Sign up with Google"
                        />
                        <div className="clickable">Cancel</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginModalContent;
