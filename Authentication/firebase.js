// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzO1_XYcjNZkIi3PejVUih3ajm6jEHumM",
  authDomain: "authentication-aa59c.firebaseapp.com",
  projectId: "authentication-aa59c",
  storageBucket: "authentication-aa59c.appspot.com",
  messagingSenderId: "1054741207370",
  appId: "1:1054741207370:web:bb0f8563f74ce3990dc9b3"
};

// let app;

// // if (firebase.apps.length === 0){
// //     app = firebase.initializeApp(firebaseConfig);
// // }else{
// //     app = firebase.app();
// // }
// app = firebase.initializeApp(firebaseConfig);


// const auth = firebase.auth();

// export { auth }

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
// export const provider = new GoogleAuthProvider();
