import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbN0kzYJNZ9CFQW4tCSAzRAumDyoE7weo",
    authDomain: "alzoya-book-warehouse.firebaseapp.com",
    projectId: "alzoya-book-warehouse",
    storageBucket: "alzoya-book-warehouse.appspot.com",
    messagingSenderId: "483368003509",
    appId: "1:483368003509:web:069d9d0d3ed313003f5bfc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;