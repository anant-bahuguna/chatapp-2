import firebase from "firebase";

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

var fire = firebase.initializeApp(config);
export default fire;
