import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  initializeFirestore,
  CACHE_SIZE_UNLIMITED,
  enableMultiTabIndexedDbPersistence,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6fVrI4RIZjDyeA6ErptqMv6FLeg6isew",
  authDomain: "ucab-form.firebaseapp.com",
  projectId: "ucab-form",
  storageBucket: "ucab-form.appspot.com",
  messagingSenderId: "53722177307",
  appId: "1:53722177307:web:5caa154a5c5f3fadd8fdbe",
  measurementId: "G-X4CM7QHZHC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);

const db = initializeFirestore(app, { cacheSizeBytes: CACHE_SIZE_UNLIMITED });
enableMultiTabIndexedDbPersistence(db);

export { auth, db, storage };
