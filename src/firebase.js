// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';
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

// //Help with debugging
// if (!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
// if (!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
// if (!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
// if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
// if (!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credential: messagingSenderId");
// if (!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");
// if (!firebaseConfig.measurementId) throw new Error("Missing firebase credential: measurementId");

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Imports
const db = getFirestore(app);
const auth = getAuth(app);
// const provider = new firebaseConfig.auth.GoogleAuthProvider(); //Google sign in provider
// export { db, auth, provider }

// // Testing
// createUserWithEmailAndPassword(auth, "testing@gmail.com", "testing123")
//     .then((userCredential) => {
//         console.log(email);
//         console.log(password);
//         const user = userCredential.user;
//     })
//     .catch((error) => {
//         console.log(error.code);
//         console.log(error.message);
//     });

//Register
const regist = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(email);
            console.log(password);
            const user = userCredential.user;
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}


onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in');
    } else {
        console.log('no user');
    }
});