import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBKx3chRq9LUbFQFQCWahn57jRjjic9Dno",
  authDomain: "facebook-messenger-clone-efd86.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-efd86.firebaseio.com",
  projectId: "facebook-messenger-clone-efd86",
  storageBucket: "facebook-messenger-clone-efd86.appspot.com",
  messagingSenderId: "929484141899",
  appId: "1:929484141899:web:803ded84a42b6a300da4ce"
});

const db = firebaseApp.firestore();

export default db;
