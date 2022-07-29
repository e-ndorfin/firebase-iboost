// import { initializeApp } from 'firebase/app'; 
// import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
// import firebase from 'firebase/firestore';


// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyCREyD51TqXS_bKO08t8tnnfw7tUtGgIjM",
//     authDomain: "iboost-da569.firebaseapp.com",
//     projectId: "iboost-da569",
//     storageBucket: "iboost-da569.appspot.com",
//     messagingSenderId: "1092488327279",
//     appId: "1:1092488327279:web:5a836741f39c5ccf991d9a",
//     measurementId: "G-37YK7NBZVG"
// })

// const auth = getAuth(firebaseApp); 



// // Detect auth state 

// onAuthStateChanged (auth, user => { 
//     if (user != null){ 
//         console.log('logged in!');
//     }
//     else{ 
//         console.log('No user');
//     }
// });


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCREyD51TqXS_bKO08t8tnnfw7tUtGgIjM",
    authDomain: "iboost-da569.firebaseapp.com",
    projectId: "iboost-da569",
    storageBucket: "iboost-da569.appspot.com",
    messagingSenderId: "1092488327279",
    appId: "1:1092488327279:web:5a836741f39c5ccf991d9a",
    measurementId: "G-37YK7NBZVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in');
    } else {
        console.log('no user');
    }
});