const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCREyD51TqXS_bKO08t8tnnfw7tUtGgIjM",
    authDomain: "iboost-da569.firebaseapp.com",
    projectId: "iboost-da569",
    storageBucket: "iboost-da569.appspot.com",
    messagingSenderId: "1092488327279",
    appId: "1:1092488327279:web:5a836741f39c5ccf991d9a",
    measurementId: "G-37YK7NBZVG"
});

//Imports
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const regist = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
}