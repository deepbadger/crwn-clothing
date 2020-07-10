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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;