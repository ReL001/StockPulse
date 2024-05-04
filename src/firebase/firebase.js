// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABHyFjONu_h-d5oKsl68neWYkHq4b1IvQ",
  authDomain: "project-k1-420810.firebaseapp.com",
  projectId: "project-k1-420810",
  storageBucket: "project-k1-420810.appspot.com",
  messagingSenderId: "1051479924868",
  appId: "1:1051479924868:web:b25a255c721c347765a2d1",
  measurementId: "G-220R7E8RWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app , analytics, auth};