// Import necessary components and hooks
import { createContext, useEffect, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function googleSignIn(navigate) {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // Obtain the user's UID from the authentication result
        const uid = result.user.uid;
  
        // Check if the UID exists in the MongoDB collection
        return fetch(`https://sdgp-cs14-back-end.onrender.com/api/checkUser/${user.uid}`)
          .then((response) => response.json())
          .then((data) => {
            // Navigate based on the existence of the UID in the database
            if (data.exists) {
              navigate("/dashboard");
            } else {
              navigate("/health-quiz");
            }
          })
          .catch((error) => {
            console.log("Error checking user existence:", error);
          });
      })
      .catch((error) => {
        console.log("Error signing in with Google:", error.message);
      });
  }

  async function resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Email not found. Please enter a valid email address.");
      } else {
        setError(error.message);
      }
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn, resetPassword, message, error }}>{children}</userAuthContext.Provider>;
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
