import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAINhHDSfeyVqwYUMWRRtenz5lWZw_6dl8",
  authDomain: "react-marioplan-9506a.firebaseapp.com",
  databaseURL: "https://react-marioplan-9506a.firebaseio.com",
  projectId: "react-marioplan-9506a",
  storageBucket: "react-marioplan-9506a.appspot.com",
  messagingSenderId: "224619216929",
  appId: "1:224619216929:web:a8103f87df357e45bea360",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
