import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBWIsB5LigGW3xeTk3rk1XRJnP5cyGFS5c",
  authDomain: "wireless-buzzer-964e4.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-964e4.firebaseio.com",
  projectId: "wireless-buzzer-964e4",
  storageBucket: "wireless-buzzer-964e4.appspot.com",
  messagingSenderId: "1087968171361",
  appId: "1:1087968171361:web:f7badd1e6332a0f3042120",
  measurementId: "G-0N82EV9GJ7"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()