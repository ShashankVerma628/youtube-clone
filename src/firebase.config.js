import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFan33stoPJQgZePdX6R4PlgF-ojG3qfk",
    authDomain: "clone-a31f3.firebaseapp.com",
    projectId: "clone-a31f3",
    storageBucket: "clone-a31f3.appspot.com",
    messagingSenderId: "335892721422",
    appId: "1:335892721422:web:012fbaa002318ff78e715f"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();