// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDytdiYe-U5_QVayeRvQMvD1hCgKgYP3Zk",
    authDomain: "technology-holdings.firebaseapp.com",
    projectId: "technology-holdings",
    storageBucket: "technology-holdings.appspot.com",
    messagingSenderId: "659647416142",
    appId: "1:659647416142:web:5abdd293b787bf9a08401f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;