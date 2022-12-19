// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;



// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDqal1N9APLNqbc9k7bjAtQdGhMlBH_sOA",
//   authDomain: "simple-firebase-authenti-9fc2a.firebaseapp.com",
//   projectId: "simple-firebase-authenti-9fc2a",
//   storageBucket: "simple-firebase-authenti-9fc2a.appspot.com",
//   messagingSenderId: "597750221225",
//   appId: "1:597750221225:web:9d87291ff44ed7804b1cb8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export default app;