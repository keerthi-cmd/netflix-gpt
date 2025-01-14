// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNUk9WSeA0ZOpP_qSgAXZ8sDLBzgs9zuA",
  authDomain: "netflix-1890b.firebaseapp.com",
  projectId: "netflix-1890b",
  storageBucket: "netflix-1890b.firebasestorage.app",
  messagingSenderId: "516892699039",
  appId: "1:516892699039:web:fb33baa016282966fbf5aa",
  measurementId: "G-T8RLP2QKD6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
