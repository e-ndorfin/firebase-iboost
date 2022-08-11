// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCREyD51TqXS_bKO08t8tnnfw7tUtGgIjM",
    authDomain: "iboost-da569.firebaseapp.com",
    databaseURL: "https://iboost-da569-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "iboost-da569",
    storageBucket: "iboost-da569.appspot.com",
    messagingSenderId: "1092488327279",
    appId: "1:1092488327279:web:5a836741f39c5ccf991d9a",
    measurementId: "G-37YK7NBZVG"
});

// //Help with debugging
// if (!firebaseConfig.apiKey) throw new Error("Missing firebase credential: apiKey");
// if (!firebaseConfig.authDomain) throw new Error("Missing firebase credential: authDomain");
// if (!firebaseConfig.projectId) throw new Error("Missing firebase credential: projectId");
// if (!firebaseConfig.storageBucket) throw new Error("Missing firebase credential: storageBucket");
// if (!firebaseConfig.messagingSenderId) throw new Error("Missing firebase credential: messagingSenderId");
// if (!firebaseConfig.appId) throw new Error("Missing firebase credential: appId");
// if (!firebaseConfig.measurementId) throw new Error("Missing firebase credential: measurementId");

// Initialize Firebase
const deez=getDatabase();
const db = firebaseApp.firestore();
function writeUserData(userId, name, email, imageUrl){
    const reference = db.ref(deez, 'UserSettings/' + userId);

    db.set(reference, {
        UserSetting:name,
        email: email,
        profile_picture: imageUrl
    });
}

db.writeUserData("titus", "yau", "titusyau.poo", "tituslikestopoo");