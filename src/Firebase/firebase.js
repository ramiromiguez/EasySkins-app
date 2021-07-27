import firebase from "firebase/app";
import "firebase/firestore";


// web apps firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAYWTx0da1fWpPa8dY0qSI8KIeZohYBaCM",
  authDomain: "easyskins-app.firebaseapp.com",
  projectId: "easyskins-app",
  storageBucket: "easyskins-app.appspot.com",
  messagingSenderId: "38083420533",
  appId: "1:38083420533:web:0196142b38652ad8e0733c"
};

// initialize firebase
//const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const fb = firebase.initializeApp(firebaseConfig);

export const dataBase = fb.firestore()
