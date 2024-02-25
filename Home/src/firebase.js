import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBGyyrsT6ULXMVykwV3I4VdtXEgk2gK9XE",
  authDomain: "signup-login-nutrimate.firebaseapp.com",
  projectId: "signup-login-nutrimate",
  storageBucket: "signup-login-nutrimate.appspot.com",
  messagingSenderId: "770327025873",
  appId: "1:770327025873:web:b88b7a19005a91134acdf0",
  measurementId: "G-PV2RHSWQLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;