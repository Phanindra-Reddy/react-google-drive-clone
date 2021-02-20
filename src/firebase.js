import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0tFqb0QkH-DRb-k5hiF4hxLnxnKHuuRU",
    authDomain: "react--drive-clone.firebaseapp.com",
    projectId: "react--drive-clone",
    storageBucket: "react--drive-clone.appspot.com",
    messagingSenderId: "873120336884",
    appId: "1:873120336884:web:900c22497f3d9fdbddc7a1"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export {auth, provider, storage, db};