// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQcwK5-AR8ZfFk_YiO-qSCsWQeVdQmr2I",
  authDomain: "url-shortner-3d251.firebaseapp.com",
  projectId: "url-shortner-3d251",
  storageBucket: "url-shortner-3d251.appspot.com",
  messagingSenderId: "529346355802",
  appId: "1:529346355802:web:e52bbaccbcdc5f4d2e6e63",
};

// Initialize Firebase
let app;

if (firebase.apps.length == 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = app.storage();

export { db, auth, storage };
