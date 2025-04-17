import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

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