import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGhmY4Pj1l2O0KmYCRK35X8N2cm-vs6QQ",
  authDomain: "kpop-trivia-72182.firebaseapp.com",
  projectId: "kpop-trivia-72182",
  storageBucket: "kpop-trivia-72182.appspot.com",
  messagingSenderId: "120694956590",
  appId: "1:120694956590:web:f36d55af8336ecffad35bf"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
