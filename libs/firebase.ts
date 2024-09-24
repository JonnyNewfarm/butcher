// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV1g-ZdPwlxbdjrbcrlGmEPiXpQo_6bzY",
  authDomain: "butcher-64433.firebaseapp.com",
  projectId: "butcher-64433",
  storageBucket: "butcher-64433.appspot.com",
  messagingSenderId: "443400318635",
  appId: "1:443400318635:web:67fee7fdab56dc04af11ee",
  measurementId: "G-B012GV99TN"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

export default fireBaseApp