import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDd6vKAdMMbxveML3S6aSWWM113si1-9uE",
  authDomain: "rohanotes.firebaseapp.com",
  projectId: "rohanotes",
  storageBucket: "rohanotes.appspot.com",
  messagingSenderId: "1086021604550",
  appId: "1:1086021604550:web:627cd81072305b558233c7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "rohanotes");
