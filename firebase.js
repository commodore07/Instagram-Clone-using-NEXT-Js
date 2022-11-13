// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6GLznGh6ZR7r1i1a4nK0Z0d0gwNVlJIU",
  authDomain: "instaclone-80d4e.firebaseapp.com",
  projectId: "instaclone-80d4e",
  storageBucket: "instaclone-80d4e.appspot.com",
  messagingSenderId: "159122166324",
  appId: "1:159122166324:web:f47c98fe4c1c47fa0bb061"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };