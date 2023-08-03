import Link from 'next/link'
import AuthButton from '../../buttons/auth/AuthButton'

export interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

export const Header: React.FC<HeaderProps> = ({
  className,
  ...headerProps
}) => {
  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between ${className}`}
    >
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <Link href="/">
          <a className="hover:underline">Store</a>
        </Link>
      </div>
      <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Gmail</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Images</a>
        </Link>
        <AuthButton />
      </div>
    </header>
  )
}

export default Header
