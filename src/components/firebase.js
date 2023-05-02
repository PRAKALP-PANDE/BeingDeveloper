import firebase from "firebase/app";
import "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyBv9rWcuwbVURaepCxaaQNAK_rZiV7ILcE",
//     authDomain: "contactform-a3e76.firebaseapp.com",
//     projectId: "contactform-a3e76",
//     storageBucket: "contactform-a3e76.appspot.com",
//     messagingSenderId: "303120345040",
//     appId: "1:303120345040:web:c3d47278a559ed3f61fbd5"
// };

const firebaseConfig = {
    apiKey: "AIzaSyC5iN9cQSIlaCo_HL7yGmDv1-V24FLNPrw",
    authDomain: "beingdeveloper-75f8c.firebaseapp.com",
    projectId: "beingdeveloper-75f8c",
    storageBucket: "beingdeveloper-75f8c.appspot.com",
    messagingSenderId: "513566293514",
    appId: "1:513566293514:web:e697737531917622fce9f3",
    measurementId: "G-CRGV1V8GHC"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;
