import firebase from 'firebase';
const app = firebase.initializeApp({ 
    apiKey: "AIzaSyC4J0a7UVESkkA-Iu4aSNdP_A3JMhdMuaA",
    authDomain: "repfinder-450e2.firebaseapp.com",
    projectId: "repfinder-450e2",
    storageBucket: "repfinder-450e2.appspot.com",
    messagingSenderId: "850912146000",
    appId: "1:850912146000:web:f5658079ddddcd73ff1755",
    measurementId: "G-1XTTB348N1" 
});

export const auth = app.auth();