import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // state for store user
  const [user, setUser] = useState(null);

  // state to handle loading
  const [loading, setLoading] = useState(true);

  // create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // singin user with email and password
  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // singin with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  // to track user's state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currantUser) => {
      setUser(currantUser);

      // after loading user make false to setLoading state
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // information to pass anywhere in the whole application
  const authInfo = {
    user,
    loading,
    createUser,
    singInUser,
    signInWithGoogle,
    signOutUser,
  };
  return (
    <>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
