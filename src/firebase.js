import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBLHad35nENxbiSJPiAMN4h6KkLf6GlCGI",
  authDomain: "linkedin-4ca29.firebaseapp.com",
  projectId: "linkedin-4ca29",
  storageBucket: "linkedin-4ca29.appspot.com",
  messagingSenderId: "879865852980",
  appId: "1:879865852980:web:1ff42f54e273a9e79a8661"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth,provider,storage};
export default db;