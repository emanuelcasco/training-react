import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyBKQpLtPgPwQvugKfdL2EhjKcs1RIVHxiE',
  authDomain: 'react-http-1e585.firebaseapp.com',
  databaseURL: 'https://react-http-1e585-default-rtdb.firebaseio.com',
  projectId: 'react-http-1e585',
  storageBucket: 'react-http-1e585.appspot.com',
  messagingSenderId: '559657490511',
  appId: '1:559657490511:web:3d5c7b2b61cfd1ac67f23a',
  measurementId: 'G-568DWQBQCL',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
