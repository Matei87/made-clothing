import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('oNBX3PATWIdDTPvYwfJK').collection('cartItems').doc('b5ibH7F9Z2deF2WnDBep');
firestore.doc('/users/oNBX3PATWIdDTPvYwfJK/cartItems/b5ibH7F9Z2deF2WnDBep');
firestore.collection('/users/oNBX3PATWIdDTPvYwfJK/cartItems');