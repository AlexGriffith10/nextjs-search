'use client'
import { ReactNode, createContext, useState } from 'react'

interface IAuthContext {
  authenticated: boolean
  login: () => void
  logOut: () => void
}

const defaultValue: IAuthContext = {
  authenticated: false,
  login: () => undefined,
  logOut: () => undefined,
}

const AuthContext = createContext<IAuthContext>(defaultValue)
export const revalidate = 0

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState(defaultValue.authenticated)
  const login = () => {
    setAuthenticated(true)
    console.log('set login')
  }
  const logOut = () => {
    setAuthenticated(false)
    console.log('set log out')
  }

  return (
    <AuthContext.Provider value={{ authenticated, login, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
