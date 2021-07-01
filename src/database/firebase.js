import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB92chWe5gibdNzn_b-2YAFvJ8yGH1caaw",
  authDomain: "nuds-4aaf0.firebaseapp.com",
  projectId: "nuds-4aaf0",
  storageBucket: "nuds-4aaf0.appspot.com",
  messagingSenderId: "1073182338049",
  appId: "1:1073182338049:web:1f977b2c8b89231d0ee400"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebaseApp;