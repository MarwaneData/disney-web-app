// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyAbWJEIWuaYkB7-ahkA2NEJAH9SwIn38iw",
    authDomain: "desney-cloning.firebaseapp.com",
    projectId: "desney-cloning",
    storageBucket: "desney-cloning.appspot.com",
    messagingSenderId: "603920543166",
    appId: "1:603920543166:web:8d53d69198117e3d6f1def",
    measurementId: "G-ZC28ZLNFLG"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;

