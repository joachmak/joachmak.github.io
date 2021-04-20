import firebase from 'firebase/app'
import 'firebase/functions'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

const prodConfig = {
    apiKey: "AIzaSyAMGZr-JlYx7Kjq3Thj5bZwmFh9G4bgJts",
    authDomain: "portfolio-cf9c3.firebaseapp.com",
    projectId: "portfolio-cf9c3",
    storageBucket: "portfolio-cf9c3.appspot.com",
    messagingSenderId: "920228656328",
    appId: "1:920228656328:web:4826aca17d2452260da1fd",
    databaseURL: ""
}

// Initialize Firebase
firebase.initializeApp(prodConfig);

const functions = firebase.app().functions('europe-west2')

const firestore = firebase.app().firestore()

const storage = firebase.app().storage()

const auth = firebase.app().auth()

export  {
    functions, firestore, storage, auth, firebase as default
}
