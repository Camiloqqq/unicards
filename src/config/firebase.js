// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGDOKWM6G50hPenON7OAoiTf0iInZcVqw",
  authDomain: "unipaz-legends.firebaseapp.com",
  projectId: "unipaz-legends",
  storageBucket: "unipaz-legends.firebasestorage.app",
  messagingSenderId: "644499013672",
  appId: "1:644499013672:web:08a174d9a61c237c40f51d",
  measurementId: "G-NX56QR4HME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);