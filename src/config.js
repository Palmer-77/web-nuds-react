import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCDtGzEqcBJgFOzPZbXyuNVftYksJSgIqQ",
    authDomain: "wevent-demo.firebaseapp.com",
    projectId: "wevent-demo",
    storageBucket: "wevent-demo.appspot.com",
    messagingSenderId: "147862784039",
    appId: "1:147862784039:web:bd7778873fbded894ea602",
    measurementId: "G-PVVXC3C90B"
});

export default firebaseConfig;