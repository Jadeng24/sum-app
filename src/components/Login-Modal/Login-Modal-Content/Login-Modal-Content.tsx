import React from 'react';
import './Login-Modal-Content.scss';

import googleSignIn from './../../../assets/googleSignIn.jpg';
import facebookSignIn from './../../../assets/facebookSignIn.png';
import googleSignUp from './../../../assets/googleSignUp.jpg';

import {
	signInWithFacebook,
	signInWithGoogle,
} from '../../../Firebase/Firebase';

const LoginModalContent = (closeModal: any) => {
	return (
		<div className="flex column LoginModalContent">
			<h1>Login</h1>
			<img
				onClick={signInWithGoogle} // add a .then to close the modal
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
				Don't have an account?
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
	);
};

export default LoginModalContent;
