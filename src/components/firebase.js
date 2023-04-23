import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBv9rWcuwbVURaepCxaaQNAK_rZiV7ILcE",
    authDomain: "contactform-a3e76.firebaseapp.com",
    projectId: "contactform-a3e76",
    storageBucket: "contactform-a3e76.appspot.com",
    messagingSenderId: "303120345040",
    appId: "1:303120345040:web:c3d47278a559ed3f61fbd5"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;
