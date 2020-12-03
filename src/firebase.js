import firebase from "firebase";

const firebaseApp = firebase.initializeApp (
    {
        apiKey: "AIzaSyDXnRf-ubpg_pxmxZY_HQsNRSwbUOKlADk",
        authDomain: "messenger-clone-ac402.firebaseapp.com",
        projectId: "messenger-clone-ac402",
        storageBucket: "messenger-clone-ac402.appspot.com",
        messagingSenderId: "1049288406161",
        appId: "1:1049288406161:web:6f9393a4d7bcb145483b30",
        measurementId: "G-N1E78QD7NS"
      
    }
);

const db = firebaseApp.firestore();

export default db;