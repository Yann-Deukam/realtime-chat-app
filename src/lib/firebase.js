import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-ab63d.firebaseapp.com",
  projectId: "reactchatapp-ab63d",
  storageBucket: "reactchatapp-ab63d.appspot.com",
  messagingSenderId: "828619074720",
  appId: "1:828619074720:web:3171c47e9270ab9dfaedc5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
