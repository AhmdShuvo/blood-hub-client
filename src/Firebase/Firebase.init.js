import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import firebaseConfig from "./Firebase.config";


const initializeFirebase = () =>{
    initializeApp(firebaseConfig);
   
}

export default initializeFirebase