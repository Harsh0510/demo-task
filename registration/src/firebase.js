import firebase from "firebase";
// import "firebase/compat/auth";
var firebaseConfig = {
  apiKey: "AIzaSyBhPowUsirqhKuUW5X2ltDRuZZjl6dlQ48",
  authDomain: "registration-36fa3.firebaseapp.com",
  projectId: "registration-36fa3",
  storageBucket: "registration-36fa3.appspot.com",
  messagingSenderId: "897066687229",
  appId: "1:897066687229:web:57b5255b01c878a620fc94",
  measurementId: "G-TNZXQT66Z5",
};
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
