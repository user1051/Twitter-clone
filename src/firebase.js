import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOzH27GvyFjvP0-qnTDXVGsMR1UOnD3Jc",
  authDomain: "twitter-clone-cb272.firebaseapp.com",
  projectId: "twitter-clone-cb272",
  storageBucket: "twitter-clone-cb272.appspot.com",
  messagingSenderId: "256030602173",
  appId: "1:256030602173:web:dd8b04ad81320d379d58d4",
  measurementId: "G-64ZT4HM7FT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db; 