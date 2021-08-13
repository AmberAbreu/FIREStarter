import Firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD2k9awvyoeIsXSOsQtkrtoJaWHCr8yVKA",
  authDomain: "firestarter-351b5.firebaseapp.com",
  databaseURL: "https://firestarter-351b5-default-rtdb.firebaseio.com",
  projectId: "firestarter-351b5",
  storageBucket: "firestarter-351b5.appspot.com",
  messagingSenderId: "760980179319",
  appId: "1:760980179319:web:0037dade6a5fae7ad0f972",
  measurementId: "G-62J49TR28D"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();