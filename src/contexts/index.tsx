import React, { createContext, useContext, useState, PropsWithChildren, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { KEY_USER } from "../config/constants";
import LocalStorage from "../utils/localStorage";
import { IAuthContext, IUser } from "./types";

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC<PropsWithChildren>  = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const user = LocalStorage.getLocalStorage<IUser>(KEY_USER)
    if (user) {
      setUser(user)
    }
  }, [])

  const signIn = (data: IUser) => {
    setUser(data)
    navigate("/")
  }

  const logout = () => {
    setUser(null)
    LocalStorage.removeItemLocalStorage(KEY_USER)
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn,
      logout
    }}> 
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  return context
}