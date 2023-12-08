import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBqBAP4TWmq9gmrOu0QYohCzKConegsa4E",
  authDomain: "swiggy-project-20319.firebaseapp.com",
  projectId: "swiggy-project-20319",
  storageBucket: "swiggy-project-20319.appspot.com",
  messagingSenderId: "1066114544101",
  appId: "1:1066114544101:web:11a725c545ae46c8f53f0c",
  measurementId: "G-313DZP5PW3"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
const provider= new GoogleAuthProvider();

export const signInWithGoogle= ()=>{
    signInWithPopup(auth,provider).then((result)=>{
       console.log(result);
    }).catch( (error)=>{
     console.log(error)
    })
 }
 
export const signOutUser = () => {
     signOut(auth)
       .then(() => {
         console.log('User signed out successfully');
       })
       .catch((error) => {
         console.error('Error signing out:', error.message);
       });
   };


export const db =getFirestore(app);