import firebase from "firebase/app";
import "firebase/database";

// const firebaseConfig = {
// Your configuration
// };

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;
