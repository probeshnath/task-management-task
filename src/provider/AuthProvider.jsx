import React from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const userInfo = {
        name: "Probesh deb nath"
    }
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider