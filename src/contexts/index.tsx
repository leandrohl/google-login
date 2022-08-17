import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useEffect
} from 'react'
import { useNavigate } from 'react-router-dom'
import { KEY_USER } from '../config/constants'
import LocalStorage from '../utils/localStorage'
import { IAuthContext, IUser } from './types'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const navigate = useNavigate()

  const localStorage = new LocalStorage()
  useEffect(() => {
    const user = localStorage.getLocalStorage<IUser>(KEY_USER)
    if (user != null) {
      setUser(user)
    }
  }, [])

  const signIn = (data: IUser): void => {
    setUser(data)
    navigate('/')
  }

  const logout = (): void => {
    setUser(null)
    localStorage.removeItemLocalStorage(KEY_USER)
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext)
  return context
}
