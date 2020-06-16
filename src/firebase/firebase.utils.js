import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD71yj-8EJGGw_xroXS4FQrjTBdGb_8BJg",
  authDomain: "cloth-store-81e4c.firebaseapp.com",
  databaseURL: "https://cloth-store-81e4c.firebaseio.com",
  projectId: "cloth-store-81e4c",
  storageBucket: "cloth-store-81e4c.appspot.com",
  messagingSenderId: "635396852090",
  appId: "1:635396852090:web:f7c4197707ca192cf66ec3",
  measurementId: "G-93TW3T7DZY",
};
firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const createUserProfileDocument = async (userAuth, additionData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionData,
      });
    } catch (err) {
      console.log("error while creating user", err.message);
    }
  }

  return userRef;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
