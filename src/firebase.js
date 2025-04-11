// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqSFck1ZUdR3mvcfNxGezsTkySAfcxneA",
  authDomain: "ebusmanagementsystem-3bfe6.firebaseapp.com",
  projectId: "ebusmanagementsystem-3bfe6",
  storageBucket: "ebusmanagementsystem-3bfe6.firebasestorage.app",
  messagingSenderId: "1003795495729",
  appId: "1:1003795495729:web:8293593ff09c0804750e10",
  measurementId: "G-2KW8CYRFVY",
  databaseURL: "https://ebusmanagementsystem-3bfe6-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };