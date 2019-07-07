import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCxpgf4mNoWSpZ80dAWbd9svd7nrpJnIgw",
  authDomain: "chat-app-e2738.firebaseapp.com",
  databaseURL: "https://chat-app-e2738.firebaseio.com",
  projectId: "chat-app-e2738",
  storageBucket: "chat-app-e2738.appspot.com",
  messagingSenderId: "698868719117",
  appId: "1:698868719117:web:ef82810e0d7ca5e6"
};

var fire = firebase.initializeApp(config);
export default fire;
