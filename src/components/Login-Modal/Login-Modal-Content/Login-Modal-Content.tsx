import React from 'react';
import './Login-Modal-Content.scss';

import googleSignIn from './../../../assets/googleSignIn.jpg';
import googleSignUp from './../../../assets/googleSignUp.jpg';

import { signInWithGoogle } from '../../../Firebase/Firebase';

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
