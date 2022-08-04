import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCREyD51TqXS_bKO08t8tnnfw7tUtGgIjM",
    authDomain: "iboost-da569.firebaseapp.com",
    projectId: "iboost-da569",
    storageBucket: "iboost-da569.appspot.com",
    messagingSenderId: "1092488327279",
    appId: "1:1092488327279:web:5a836741f39c5ccf991d9a",
    measurementId: "G-37YK7NBZVG"
});

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
        // ...
    } else {
        console.log("no user")
    }
});
