// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase} from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW5hN2DtqEHJPF4Rm4xckhjWSfEfLBGyA",
  authDomain: "fir-realtime-react-nativ-470ac.firebaseapp.com",
  projectId: "fir-realtime-react-nativ-470ac",
  storageBucket: "fir-realtime-react-nativ-470ac.appspot.com",
  messagingSenderId: "266217670774",
  appId: "1:266217670774:web:1c79374d8a442fa8acf757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);