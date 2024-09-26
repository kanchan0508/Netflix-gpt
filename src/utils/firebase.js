// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBimh4Pn6s04IuSwFdPPe8uqvjM8KWIzcc",
  authDomain: "netflix-gpt-7065d.firebaseapp.com",
  projectId: "netflix-gpt-7065d",
  storageBucket: "netflix-gpt-7065d.appspot.com",
  messagingSenderId: "503187356935",
  appId: "1:503187356935:web:9cc9405eb25b4358a9d9a2",
  measurementId: "G-37RJ1XCZ4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()