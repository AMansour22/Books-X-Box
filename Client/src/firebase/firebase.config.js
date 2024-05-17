// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwhu8VWbtg-md-dv_Us1Ei_VGiGteYMVk",
    authDomain: "mern-book-inventory-fc27b.firebaseapp.com",
    projectId: "mern-book-inventory-fc27b",
    storageBucket: "mern-book-inventory-fc27b.appspot.com",
    messagingSenderId: "240423723034",
    appId: "1:240423723034:web:0d750cda0ac56cfa2df1a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;