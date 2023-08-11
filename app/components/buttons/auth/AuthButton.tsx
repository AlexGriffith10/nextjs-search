'use client'
import { useContext } from 'react'
import AuthContext from '../../../context/auth/AuthContext'

export interface AuthButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {}

export const revalidate = 0

const AuthButton: React.FC<AuthButtonProps> = ({
  className,
  ...buttonProps
}) => {
  const { authenticated, logOut, login } = useContext(AuthContext)

  return (
    <button
      onClick={authenticated ? logOut : login}
      className="border-1 p-2 px-4 sm:px-6 bg-blue-600 rounded text-white w-28"
      {...buttonProps}
    >
      {authenticated ? 'Sign Out' : 'Sign In'}
    </button>
  )
}

export default AuthButton
