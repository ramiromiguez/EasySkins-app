import firebase from "firebase/app";
import 'firebase/firestore'

// web apps firebase config
var firebaseConfig = {
};

// initialize firebase
const fb = firebase.initializeApp(firebaseConfig);

// accesible for everyone
export const dataBase = fb.firestore();