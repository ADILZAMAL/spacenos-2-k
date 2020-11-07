import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDpbMuwwqkCL57x-EYz-8ew1p-dikvEeMg",
  authDomain: "chat-app-2-7af7a.firebaseapp.com",
  databaseURL: "https://chat-app-2-7af7a.firebaseio.com",
  projectId: "chat-app-2-7af7a",
  storageBucket: "chat-app-2-7af7a.appspot.com",
  messagingSenderId: "722112640403",
  appId: "1:722112640403:web:a2dd462bad1457f762a466",
  measurementId: "G-17J733V5YS",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const db = app.firestore();

export { app, auth, db };
