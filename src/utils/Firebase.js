// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIxFCa8S6P4NbehYGDd1rTAnd5Gh_0jfk",
  authDomain: "netflix-clone-gpt-dd382.firebaseapp.com",
  projectId: "netflix-clone-gpt-dd382",
  storageBucket: "netflix-clone-gpt-dd382.appspot.com",
  messagingSenderId: "439924562103",
  appId: "1:439924562103:web:e400fffbead02e7ecd5532",
  measurementId: "G-0XDDL7T5PS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

//CENTRALIZE THIS AUTH AS IT WILL BE NEEDED
export const auth = getAuth();
