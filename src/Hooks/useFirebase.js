import { useEffect, useState } from 'react';

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail
} from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import initializeFirebase from '../Firebase/Firebase.init';
import { getStorage } from 'firebase/storage';


initializeFirebase();
export const storage = getStorage(initializeFirebase());

const useFirebase = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoadng] = useState(true);
  const [admin, setIsAdmin] = useState(false);

  const [user, setUser] = useState({});
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider=new FacebookAuthProvider();

  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const facebookLogin=()=>{
   return signInWithPopup(auth, facebookProvider)
  }

  // create User ////
  const register = (email, password, name,photourl) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const newUser = { email, displayName: name,photoURL:photourl };
        setUser(newUser);

        // UPdate user In FIrebse //
       updateProfile(auth.currentUser, {
          displayName: name,
        photoURL:photourl
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // ..
      });
  };


  
  // LogOUt User //

  const LogOUt = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message);
        // An error happened.
      });
  };

  // Sign IN user ///
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    fetch(
      `https://next-gen-games-server.vercel.app/user/admin/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setIsAdmin(data.admin));
  }, [user.email]);

  // Observer ///
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        setIsLoadng(false);
        // ...
      } else {
        setUser({});
        // User is signed out
        // ...
      }
    });
    return () => unSubscribe;
  }, []);

  const UpdateUser=(photo,name)=>{
    updateProfile(auth.currentUser, {
    
      photoURL: photo||auth.currentUser.photoURL
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }
  const UpdateName=(name)=>{
    updateProfile(auth.currentUser, {
    
      displayName:name
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }
const resetPass=(email)=>{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
  const saveUsertoDb = (email, displayName,password,address,group,facebook,phone,age,lastdonation) => {
    const user = { email, displayName,password,address,group,facebook,phone,age,lastdonation };
 console.log(user)
    fetch('http://localhost:9000/donors', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    });
  };
  const saveGoogleUsertoDb = (email, displayName) => {
    const user = { email, displayName };

    fetch('http://localhost:9000/donors', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return {
    user,
    register,
    LogOUt,
    Login,
    error,
    setError,
    isLoading,
    setIsLoadng,
    GoogleLogin,
    saveUsertoDb,
    saveGoogleUsertoDb,
    admin,
    UpdateUser,
    UpdateName,
    resetPass,
    facebookLogin,
  };
};

export default useFirebase;
