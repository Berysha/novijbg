 import * as firebase from "firebase";
 
 const firebaseConfig = {
    apiKey: "AIzaSyDk1qwBE1jnx_7TwqBTJ54ZfcX9EiCC538",
    authDomain: "project11-5484b.firebaseapp.com",
    projectId: "project11-5484b",
    storageBucket: "project11-5484b.appspot.com",
    messagingSenderId: "500962156718",
    appId: "1:500962156718:web:81d49131f3303f465d8d3f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export const googleAuthProvider = new firebase.auth.googleAuthProvider();