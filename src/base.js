import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC1-iBFCx9TCxlC6nRTlG0YLIMvj-BBzz0",
  authDomain: "very-hot-burgers-c45eb.firebaseapp.com",
  databaseURL:
    "https://very-hot-burgers-c45eb-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
