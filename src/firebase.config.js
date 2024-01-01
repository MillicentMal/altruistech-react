// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQGJLS32ormc5jnr-5NIDVffd2h-T4ueM",
  authDomain: "altruistech-f897f.firebaseapp.com",
  projectId: "altruistech-f897f",
  storageBucket: "altruistech-f897f.appspot.com",
  messagingSenderId: "747732202288",
  appId: "1:747732202288:web:a3b2f81b21fce955f64ef5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

