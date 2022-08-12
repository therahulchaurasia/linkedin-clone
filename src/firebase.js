import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyADUU6lT8Yfv4nooP9C1mQSZyWgaZw-VWE",
  authDomain: "linkedin-clone-fc225.firebaseapp.com",
  projectId: "linkedin-clone-fc225",
  storageBucket: "linkedin-clone-fc225.appspot.com",
  messagingSenderId: "236382668340",
  appId: "1:236382668340:web:98810af9de8ba76741ac61",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
