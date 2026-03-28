// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8pkDut6N9bagqLn3zKQI7xvj0Ztil2qM",
  authDomain: "potrivra.firebaseapp.com",
  projectId: "potrivra",
  storageBucket: "potrivra.firebasestorage.app",
  messagingSenderId: "552188586969",
  appId: "1:552188586969:web:bdd96025f3e5cadb5987c8",
  measurementId: "G-1EMJKNTJR5",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { app, auth, RecaptchaVerifier, signInWithPhoneNumber };
