import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjRJ_tyzDy8F3rTjACR7762jgBKXsvqSU",
  authDomain: "accounting-lifecycle-react-app.firebaseapp.com",
  projectId: "accounting-lifecycle-react-app",
  storageBucket: "accounting-lifecycle-react-app.appspot.com",
  messagingSenderId: "1039678330787",
  appId: "1:1039678330787:web:29137aba4ec3be0fa3ec16"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }
