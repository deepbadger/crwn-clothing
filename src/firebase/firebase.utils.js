import firebase from "firebase/app";

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDkGz3JAJ6pCEoeHPrDHqExTTxB5aClLxA",
    authDomain: "crwn-db-4897f.firebaseapp.com",
    databaseURL: "https://crwn-db-4897f.firebaseio.com",
    projectId: "crwn-db-4897f",
    storageBucket: "crwn-db-4897f.appspot.com",
    messagingSenderId: "1009702817316",
    appId: "1:1009702817316:web:7dbbb8eba8d762137312b1",
    measurementId: "G-P9LZKV1Q8F"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;