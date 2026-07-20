import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFmEMCMmHte9THwECZV2aLw_BweqfW0ZM",
  authDomain: "fp-b2-e307e.firebaseapp.com",
  projectId: "fp-b2-e307e",
  storageBucket: "fp-b2-e307e.firebasestorage.app",
  messagingSenderId: "822146135045",
  appId: "1:822146135045:web:0c1ce7c2530a3cca48d86c"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);