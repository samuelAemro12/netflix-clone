// this component is very unfamiliar and needs to be studied over the coming weeks
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmUIv1KfgOfDwyJl1lRLV4gWjXbsOvaKM",
  authDomain: "netflix-clone-project-6ac7b.firebaseapp.com",
  projectId: "netflix-clone-project-6ac7b",
  storageBucket: "netflix-clone-project-6ac7b.appspot.com",
  messagingSenderId: "342330088506",
  appId: "1:342330088506:web:6f34c1ab4f9339dce7a903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password)=>{
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password);
        const user = response.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name, authProvider: "local",
            email,
        });
    } catch(error){
        console.log(error);
        alert(error)
    }
}
const login = async (email, password)=>{
    try{
        signInWithEmailAndPassword(auth, email, password);
    } catch (error){
        console.log(error);
        alert(error);
    }
}
const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout}