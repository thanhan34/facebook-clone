import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKUWJRT-XRAC99h0hoPO8KGUJqgflZoFw",
  authDomain: "facebook-clone-1bd4f.firebaseapp.com",
  databaseURL: "https://facebook-clone-1bd4f.firebaseio.com",
  projectId: "facebook-clone-1bd4f",
  storageBucket: "facebook-clone-1bd4f.appspot.com",
  messagingSenderId: "1057767275043",
  appId: "1:1057767275043:web:f14af9e84283460fe4cf96",
  measurementId: "G-GWG5TZD0Z9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;