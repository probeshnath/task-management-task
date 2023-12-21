import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

     //google auth provider
     const googleProvider = new GoogleAuthProvider();


       // google login or signup
       const handleGoogleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const userInfo = {
        handleGoogleLogin
    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider