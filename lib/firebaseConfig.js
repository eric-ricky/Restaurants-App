// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZqBQtrTY7KdbkvVvOC6s-M7t2TLWAod0",
  authDomain: "nstant-restaurant-dashboard.firebaseapp.com",
  projectId: "nstant-restaurant-dashboard",
  storageBucket: "nstant-restaurant-dashboard.appspot.com",
  messagingSenderId: "1068697150157",
  appId: "1:1068697150157:web:294d55b11954409f3d7f84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
