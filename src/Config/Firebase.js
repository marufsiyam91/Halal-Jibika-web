import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_VITE_APP_KEY,
  authDomain: import.meta.env.REACT_VITE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_VITE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_VITE_APP_ID
};

const app = initializeApp(firebaseConfig);












