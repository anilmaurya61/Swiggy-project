import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAplyZGNypbpW1mAa2nNY8wT192a7Kdf0k",
  authDomain: "swiggy-project-65785.firebaseapp.com",
  projectId: "swiggy-project-65785",
  storageBucket: "swiggy-project-65785.appspot.com",
  messagingSenderId: "913869054498",
  appId: "1:913869054498:web:72ded8c8c122fe3e50207b",
  measurementId: "G-CS6QLNV73V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);