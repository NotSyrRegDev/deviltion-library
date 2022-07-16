// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider , signInWithPopup , getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDAIpnf7s04txUSkynBnTROV6m8h48EYRM",
//   authDomain: "deviltion-library.firebaseapp.com",
//   projectId: "deviltion-library",
//   storageBucket: "deviltion-library.appspot.com",
//   messagingSenderId: "384305473244",
//   appId: "1:384305473244:web:271b2551eaef1f0b9cf619"
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket:process.env.REACT_APP_FIREBASE_STOARGE_BUCKET ,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
auth.languageCode = 'it';

export {provider , auth , signInWithPopup};