'use client'

import { createContext, useState } from 'react'

interface ContextProps {
  userId: string
  updateUserId: () => void
}

const defaultValue: ContextProps = {
  userId: 'bob',
  updateUserId: () => undefined,
}

const GlobalContext = createContext<ContextProps>(defaultValue)
//@ts-ignore
export const AuthProvider: React.FC = ({ children }) => {
  const [userId, setUserId] = useState(defaultValue.userId)
  const updateUserId = () => setUserId('Joe')

  return (
    <GlobalContext.Provider value={{ userId, updateUserId }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
