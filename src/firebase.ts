import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBmULsEyWdcUTv9yGXSvLPQS-4y6EsAO4M",
  authDomain: "g-91-98814.firebaseapp.com",
  projectId: "g-91-98814",
  databaseURL: "https://g-91-98814-default-rtdb.firebaseio.com",
  storageBucket: "g-91-98814.firebasestorage.app",
  messagingSenderId: "763776952140",
  appId: "1:763776952140:web:fda30673543bef337dd1e9",
  measurementId: "G-PP34NS6GWL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const realDatabase = getDatabase(app)



