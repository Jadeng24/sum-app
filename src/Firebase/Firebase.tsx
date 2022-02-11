/* eslint-disable no-console */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import {
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FBapiKey,
    authDomain: process.env.REACT_APP_FBauthDomain,
    projectId: process.env.REACT_APP_FBprojectId,
    storageBucket: process.env.REACT_APP_FBstorageBucket,
    messagingSenderId: process.env.REACT_APP_FBmessagingSenderId,
    appId: process.env.REACT_APP_FBappId,
    measurementId: process.env.REACT_APP_FBmeasurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

const gmailProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = () => {
    return signInWithPopup(auth, gmailProvider).then(
        (response) => {
            const name = response.user.displayName || '';
            const email = response.user.email || '';
            const pic = response.user.photoURL || '';
            localStorage.setItem('currentUser', name);
            localStorage.setItem('currentUserEmail', email);
            localStorage.setItem('profilePic', pic);
        },
        (error) => {
            console.log(error);
        }
    );
};
export const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider).then(
        (response) => {
            const name = response.user.displayName || '';
            const pic = response.user.photoURL || '';
            localStorage.setItem('currentUser', name);
            localStorage.setItem('profilePic', pic);
        },
        (error) => {
            console.log(error);
        }
    );
};
export const signOutUser = (): Promise<void> => {
    return auth.signOut().then(() => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserEmail');
        localStorage.removeItem('profilePic');
    });
};
