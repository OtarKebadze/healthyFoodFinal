// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe8AEfg-YB4BfXvWIzVVZ5RQnhMCCKGdU",
  authDomain: "ecommercehealthyfood.firebaseapp.com",
  projectId: "ecommercehealthyfood",
  storageBucket: "ecommercehealthyfood.appspot.com",
  messagingSenderId: "651016737504",
  appId: "1:651016737504:web:933286cefda4c865ba7685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}