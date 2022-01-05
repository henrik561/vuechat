import firebase from 'firebase/compat/app';
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyC1xt-XCXd5gD6Or_G2BtuUnwy0MbCzG8Q",
    authDomain: "vuechat-ae452.firebaseapp.com",
    databaseURL: "https://vuechat-ae452-default-rtdb.firebaseio.com",
    projectId: "vuechat-ae452",
    storageBucket: "vuechat-ae452.appspot.com",
    messagingSenderId: "499559166168",
    appId: "1:499559166168:web:8db679239e7880f2a2a7ad",
    measurementId: "G-R3QE5P9F86"
};

const db = firebase.initializeApp(config);
export default db;