import { Inter } from 'next/font/google'
import Image from 'next/image'
import Card from './components/cards/Card'
import PrimaryLayout from './components/layouts/primary/PrimaryLayout'
import SidebarLayout from './components/layouts/sidebar/SidebarLayout'
import { mockCardProps } from './components/cards/Card.mocks'

import styles from './page.module.css'
import { ReactNode } from 'react'
import { NextPageWithLayout } from './pages'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <Card {...mockCardProps.base} />
    </section>
  )
}

export default Home

Home.getLayout = (page: ReactNode) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  )
}
