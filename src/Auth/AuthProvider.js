import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubcribe();
  }, []);

  const auth = getAuth(app);
  const signInWithProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };
  return (
    <AuthContext.Provider value={{ user, loading, signInWithProvider }}>
      <>{children}</>
    </AuthContext.Provider>
  );
};
