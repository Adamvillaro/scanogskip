// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpwR2NW3_DpEskB0OACeWpoA2LyEztwvE",
  authDomain: "scanogskip.firebaseapp.com",
  projectId: "scanogskip",
  storageBucket: "scanogskip.firebasestorage.app",
  messagingSenderId: "114189006411",
  appId: "1:114189006411:web:f018a33bba2fa087873fce"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
