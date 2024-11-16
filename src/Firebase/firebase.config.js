// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhFo4zDyhuMJl1MQGuVvOGS15h4X6eVhA",
  authDomain: "dragon-news-31bd7.firebaseapp.com",
  projectId: "dragon-news-31bd7",
  storageBucket: "dragon-news-31bd7.firebasestorage.app",
  messagingSenderId: "67014904855",
  appId: "1:67014904855:web:ec4877a6e70f1439546052"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;