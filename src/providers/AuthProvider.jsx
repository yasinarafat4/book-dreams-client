import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Sign Up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  Login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sign in
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // GitHub sign in
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //  Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

   // Update user profile
   const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

// // Update user profile
// const updateUserProfile = async (name, photo, university, address) => {
//   try {
//     const user = auth.currentUser;

//     // Step 1: Update (displayName and photoURL) using updateProfile
//     await updateProfile(user, {
//       displayName: name,
//       photoURL: photo,
//     });

//     // custom properties (university and address) using updateUser
//     await updateUser(user.uid, {
//       university: university,
//       address: address,
//     });
//   } catch (error) {
//     console.error("Error updating profile:", error);
//   }
// };

// Reset Password
const resetPassword = (email)=>{
  return sendPasswordResetEmail(auth , email)
}


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    githubSignIn,
    updateUserProfile,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
