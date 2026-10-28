
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCv1l7tbZWWPg54NMCxfs_86GebmGl2IwU",
  authDomain: "app-firebase-learn-a9128.firebaseapp.com",
  projectId: "app-firebase-learn-a9128",
  storageBucket: "app-firebase-learn-a9128.firebasestorage.app",
  messagingSenderId: "670674889282",
  appId: "1:670674889282:web:31527f6ea6dedf09905bdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);

