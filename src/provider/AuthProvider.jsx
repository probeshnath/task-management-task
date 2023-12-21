import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  //google auth provider
  const googleProvider = new GoogleAuthProvider();


  // google login or signup
  const handleGoogleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  // Register user with email, password
  const signup = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //   when a user sign up with email and password 
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }

     //   signin user with email and password
     const signInUser = (email,password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }




  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
      console.log(currentUser)


    })
    return () => {
      return unSubscribe()
    }
  }, [])

  const userInfo = {
    handleGoogleLogin,
    signup,
    updateUserProfile,
    signInUser
  }

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider