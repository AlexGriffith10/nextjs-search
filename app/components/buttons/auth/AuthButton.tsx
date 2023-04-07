import { useContext } from 'react'
// import AuthContext from '../../../state/auth/AuthContext'
import styles from './AuthButton.module.css'

export interface AuthButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {}

const AuthButton: React.FC<AuthButtonProps> = ({
  className,
  ...buttonProps
}) => {
  // const { authenticated, login, logOut } = useContext(AuthContext)

  return (
    <button
      // onClick={authenticated ? logOut : login}
      className={`${styles.container} ${className} border-1 p-2 px-4 sm:px-6 bg-blue-500 rounded text-white w-28`}
      {...buttonProps}
    >
      Placeholder text
      {/* {authenticated ? 'Sign Out' : 'Sign In'} */}
    </button>
  )
}

export default AuthButton
