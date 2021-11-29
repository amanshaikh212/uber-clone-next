// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth } from 'firebase/auth' 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6xJALMOImTRZqBNgjXH-jAS492DKSvtY",
  authDomain: "uber-clone-27c33.firebaseapp.com",
  projectId: "uber-clone-27c33",
  storageBucket: "uber-clone-27c33.appspot.com",
  messagingSenderId: "7404126770",
  appId: "1:7404126770:web:e34f96d160ebcaffb0322b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app,provider,auth}