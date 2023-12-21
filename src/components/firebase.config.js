// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD02OIGVV74Z34S5ox2E09Y3_O1mNgpY4",
  authDomain: "altruistech-eec9c.firebaseapp.com",
  databaseURL: "https://altruistech-eec9c-default-rtdb.firebaseio.com",
  projectId: "altruistech-eec9c",
  storageBucket: "altruistech-eec9c.appspot.com",
  messagingSenderId: "154397714092",
  appId: "1:154397714092:web:6efc8545c40fcaaf57a109"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);