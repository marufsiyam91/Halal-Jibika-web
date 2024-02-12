// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPDUJixTU3cReI7G5E4DcvEs6RH87GxCc",
  authDomain: "halal-jibika-9f20b.firebaseapp.com",
  projectId: "halal-jibika-9f20b",
  storageBucket: "halal-jibika-9f20b.appspot.com",
  messagingSenderId: "1064208158057",
  appId: "1:1064208158057:web:d5e581ab84d7296c1981f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)










