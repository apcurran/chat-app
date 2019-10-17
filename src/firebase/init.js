import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJOyx6JpN6Xydrjg1ZjAw9R3v4EZ_dWac",
    authDomain: "chat-app-bb29b.firebaseapp.com",
    databaseURL: "https://chat-app-bb29b.firebaseio.com",
    projectId: "chat-app-bb29b",
    storageBucket: "chat-app-bb29b.appspot.com",
    messagingSenderId: "1069724410120",
    appId: "1:1069724410120:web:d6967a3588405f3a3c0cbd"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();

console.log(firestore);