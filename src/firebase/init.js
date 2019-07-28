import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyCytPqACauL7988AuF7eRueK1ppG88yPBA',
  authDomain: 'geo-chat-dfae7.firebaseapp.com',
  databaseURL: 'https://geo-chat-dfae7.firebaseio.com',
  projectId: 'geo-chat-dfae7',
  storageBucket: '',
  messagingSenderId: '1086360932594',
  appId: '1:1086360932594:web:f92887a7c03fe760'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
