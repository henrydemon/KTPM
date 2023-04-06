// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG-v1I8sw1lSQ4ElDQD5wIU6uLfV6fGMY",
  authDomain: "ptpmmmn.firebaseapp.com",
  projectId: "ptpmmmn",
  storageBucket: "ptpmmmn.appspot.com",
  messagingSenderId: "209085479047",
  appId: "1:209085479047:web:8c252aa5e1aff1199a6022",
  measurementId: "G-T83BJRH3BY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
