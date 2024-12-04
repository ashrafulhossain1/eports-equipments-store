// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf5D_MNQAHqkCAv52MnqOZfs5VhIfgT7o",
    authDomain: "sports-express-961ff.firebaseapp.com",
    projectId: "sports-express-961ff",
    storageBucket: "sports-express-961ff.firebasestorage.app",
    messagingSenderId: "916478645550",
    appId: "1:916478645550:web:8ae66c4844f9ffc51b56bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;