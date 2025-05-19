// Import the functions you need from the SDKs you need
import config from "@/config/config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export const firebaseApp = initializeApp(config.firebaseConfig);
export const db = getFirestore(firebaseApp);
