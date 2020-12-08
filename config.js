import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyDIj4UewuKT3Tv2dm1LueNC2qd6G99uJp8",
    authDomain: "interact-2737d.firebaseapp.com",
    projectId: "interact-2737d",
    storageBucket: "interact-2737d.appspot.com",
    messagingSenderId: "27577011425",
    appId: "1:27577011425:web:1da245e0040d40b708bba0",
    measurementId: "G-FVT65D9YNL"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
