// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNv48Ii1cZXd8bjvVjnN__q1sLaPrj850",
  authDomain: "rex-chatbot-e6b86.firebaseapp.com",
  projectId: "rex-chatbot-e6b86",
  storageBucket: "rex-chatbot-e6b86.appspot.com",
  messagingSenderId: "577245806124",
  appId: "1:577245806124:web:605f2a68623bd78319db89",
  measurementId: "G-723Q0GH34B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.addEventListener("DOMContentLoaded", event => {
    console.log(app);
});


window.googleLogin = function() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}`);
            console.log(user);
        })
        .catch(console.log);
};
