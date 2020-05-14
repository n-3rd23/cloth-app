import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAEka_0w2stoCMUgzQABFlQkJT-kxxNSFs",
    authDomain: "cloths-36d98.firebaseapp.com",
    databaseURL: "https://cloths-36d98.firebaseio.com",
    projectId: "cloths-36d98",
    storageBucket: "cloths-36d98.appspot.com",
    messagingSenderId: "274674881715",
    appId: "1:274674881715:web:3a88ff93b3bb6c823c4cc6",
    measurementId: "G-YCPWDZM5GL"
}

export const createUserDocumentProfile = async (userAuth, additionalData) => {
    if(!userAuth) return; // exits out if the user is not logged in

    const userRef = firestore.doc(`users/${userAuth.uid}`) //retrives data from users collection
    const snapShot = await userRef.get() //gets the user
    // console.log(snapShot)
    
    // if user dosent exists create a new user
    if(!snapShot.exists) {
        const {displayName, email} = userAuth // destructuring diaplay name and email
        const createdAt = new Date() // 

        try {

            // set is userd to insert data into the db
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error)
        }
    }

    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;