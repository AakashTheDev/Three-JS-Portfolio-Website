// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfih9LKUuHJApzSKg_fkLvpqv3AEkcRLA",
  authDomain: "three-js-14509.firebaseapp.com",
  projectId: "three-js-14509",
  storageBucket: "three-js-14509.appspot.com",
  messagingSenderId: "559062598232",
  appId: "1:559062598232:web:21509dcde0ba1579afc02d",
  measurementId: "G-1DPVLYCDVW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
