// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsH3TGYj1kh3IdHU1jYKJA8E0LSMDH-9g",
  authDomain: "streamsage-8a70b.firebaseapp.com",
  projectId: "streamsage-8a70b",
  storageBucket: "streamsage-8a70b.appspot.com",
  messagingSenderId: "780665267053",
  appId: "1:780665267053:web:d6b5eaa7395fe357deb064",
  measurementId: "G-9TWD8ZDWMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();