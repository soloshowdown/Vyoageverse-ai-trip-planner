// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4A4nS3kCloz0274o87mVeRMHViL8e7f0",
  authDomain: "gemini-ai-trip-planner.firebaseapp.com",
  projectId: "gemini-ai-trip-planner",
  storageBucket: "gemini-ai-trip-planner.firebasestorage.app",
  messagingSenderId: "416503763105",
  appId: "1:416503763105:web:302640b62317a1c9ef20e0",
  measurementId: "G-ZLSGMVRCFD"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
