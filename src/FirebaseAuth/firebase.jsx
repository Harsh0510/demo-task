import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyAyw7bNVwKkWrlnEmo4PsnYstfboo7eHRw",
  authDomain: "fir-auth-2aec3.firebaseapp.com",
  projectId: "fir-auth-2aec3",
  storageBucket: "fir-auth-2aec3.appspot.com",
  messagingSenderId: "529908407463",
  appId: "1:529908407463:web:9bd462ea927dca8ee8cf82",
  measurementId: "G-8EGNEJV1CW",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
