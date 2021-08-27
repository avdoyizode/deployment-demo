import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDvJCvl7_roZWsB1pXF5JEmn-YRSc0JA_Q",
  authDomain: "fir-test-62c93.firebaseapp.com",
  projectId: "fir-test-62c93",
  storageBucket: "fir-test-62c93.appspot.com",
  messagingSenderId: "1071207023833",
  appId: "1:1071207023833:web:4e8303cf7fd06bbff76ac8",
  measurementId: "G-T2BBHMXCJ8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
