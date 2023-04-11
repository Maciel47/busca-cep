// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByN3hN2SSSIZ2Kd51clIHkXszoazbRJWw",
  authDomain: "buscacepdb.firebaseapp.com",
  databaseURL: "https://buscacepdb-default-rtdb.firebaseio.com",
  projectId: "buscacepdb",
  storageBucket: "buscacepdb.appspot.com",
  messagingSenderId: "275011883695",
  appId: "1:275011883695:web:21208445f0fcd234943a5a",
  measurementId: "G-GSNE0FEEX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);