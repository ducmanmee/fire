import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';   

const firebaseConfig = {
   apiKey: "AIzaSyAbyjDKl6ogJncrtUbDZtKDZhUHZ4cbZRU",
   authDomain: "react-firebase-48279.firebaseapp.com",
   databaseURL: "https://react-firebase-48279-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "react-firebase-48279",
   storageBucket: "react-firebase-48279.appspot.com",
   messagingSenderId: "421472774481",
   appId: "1:421472774481:web:41859b95bc7bf6420b8b70",
   measurementId: "G-GY6VMR7NE1"
 };

 export const app = initializeApp(firebaseConfig);
 export const database = getDatabase(app);