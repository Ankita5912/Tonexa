// Import the functions you need from the SDKs you need
// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Optional: use analytics only in browser
// import { getAnalytics } from "firebase/analytics";

// Firebase configuration (you may move this to .env for security in production)
const firebaseConfig = {
  apiKey: "AIzaSyBrA2td4gZPPmHYsD2f4OOXGoeNQ7K3cCo",
  authDomain: "tonexa-ac926.firebaseapp.com",
  projectId: "tonexa-ac926",
  storageBucket: "tonexa-ac926.appspot.com", // fix ".app" typo
  messagingSenderId: "98317749",
  appId: "1:98317749:web:a79e3a5bf47ed7067215fc",
  measurementId: "G-ZZM5S82614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);

// Optional: Analytics (commented unless used)
// const _analytics = getAnalytics(app); // Avoid ESLint warning