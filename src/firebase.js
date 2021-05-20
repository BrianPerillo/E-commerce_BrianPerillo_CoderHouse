  import firebase from 'firebase';
  import 'firebase/firestore';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var app = {
    apiKey: "AIzaSyB_7t3Sg6cEXKcY_TXIzXbhbSqW7QbWPA4",
    authDomain: "coderhouse-ecommerce-c0639.firebaseapp.com",
    projectId: "coderhouse-ecommerce-c0639",
    storageBucket: "coderhouse-ecommerce-c0639.appspot.com",
    messagingSenderId: "869153944413",
    appId: "1:869153944413:web:58d42e065cf8acc617eeb4",
    measurementId: "G-6XZBBLJBEZ"
  };
//   // Initialize Firebase
//   firebase.initializeApp(app);
//   firebase.analytics();

//   export const getFirebase = () => app
  
//   export const getFirestore = () => firebase.firestore(app)

const fb = firebase.initializeApp(app)

export const db = fb.firestore();