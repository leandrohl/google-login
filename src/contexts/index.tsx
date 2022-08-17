import React, { createContext, useContext } from "react";
import { IAuthContext } from "./types";

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC = ({}) => {
  return (
    <AuthContext.Provider value={{}}> 
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}