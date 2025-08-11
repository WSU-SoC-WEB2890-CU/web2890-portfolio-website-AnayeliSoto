// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJEzDuWdj-R-mgZaVqemKtbIY2StD6p5g",
  authDomain: "my-portfolio-contact-55568.firebaseapp.com",
  projectId: "my-portfolio-contact-55568",
  storageBucket: "my-portfolio-contact-55568.firebasestorage.app",
  messagingSenderId: "650086251869",
  appId: "1:650086251869:web:3dc494fdebc89e0ba9bcb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export db for use in your components
export { db };
