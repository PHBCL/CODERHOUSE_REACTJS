// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAarzalgSM57qvRXRtvjgUDGvybB1mlEhY",
  authDomain: "ecom-coder.firebaseapp.com",
  projectId: "ecom-coder",
  storageBucket: "ecom-coder.appspot.com",
  messagingSenderId: "26017938334",
  appId: "1:26017938334:web:34cd86719adb418823b48f",
  measurementId: "G-899703FTH2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

