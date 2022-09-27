import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAnomqc1roilJKGwhXqmf-gHSAgTlpiq6g",
  authDomain: "e-lib-bd79d.firebaseapp.com",
  projectId: "e-lib-bd79d",
  storageBucket: "e-lib-bd79d.appspot.com",
  messagingSenderId: "211728452240",
  appId: "1:211728452240:web:419b3f233755455e01a615",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
