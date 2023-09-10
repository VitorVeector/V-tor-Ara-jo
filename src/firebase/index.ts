import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "vitorveector.firebaseapp.com",
    databaseURL: "https://vitorveector-default-rtdb.firebaseio.com",
    projectId: "vitorveector"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp)

