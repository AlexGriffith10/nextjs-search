//import { signout, useSession } from 'next-auth/react'
import Link from 'next/link'
import styles from './SidebarLayout.module.css'

export interface SidebarLayoutProps {}

const SidebarLayout: React.FC<SidebarLayoutProps> = () => {
  // const { status } = useSession()

  return (
    <nav className={styles.nav}>
      {/* {
                status === 'authenticated' ? (
                    <>
                      <p>Signed in</p>
                      <button onClick={() => signOut()}>Sign Out</button>
                    </>
                ) : (
                    <Link href='/api/auth/signin'>
                        <a>Sign In</a>
                    </Link>
                )
            } */}
      <input className={styles.input} placeholder="Search ..."></input>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}

export default SidebarLayout
