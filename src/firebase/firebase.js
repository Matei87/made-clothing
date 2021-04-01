import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBbKSskfRtXnOIu4cUaAmuLl6UtO0jM1e4",
    authDomain: "made-clothing.firebaseapp.com",
    databaseURL: "https://made-clothing.firebaseio.com",
    projectId: "made-clothing",
    storageBucket: "made-clothing.appspot.com",
    messagingSenderId: "921681673235",
    appId: "1:921681673235:web:568e51912fba077be413e6",
    measurementId: "G-0D1BEDLRKK"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error);
        }

    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//popup the signin for google
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;