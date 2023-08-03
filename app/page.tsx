import { Inter } from 'next/font/google'
import Search from './components/search/searchForm/Search'
import PrimaryLayout from './components/layouts/primary/PrimaryLayout'
import Image from 'next/image'

import { ReactNode } from 'react'
import { NextPageWithLayout } from './pages'
import AuthButton from './components/buttons/auth/AuthButton'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/google.png"
        alt="logo"
        width={272}
        height={92}
        priority // next will prioritize loading this image
      />
      <Search buttonText="test" />
    </section>
  )
}

export default Home

Home.getLayout = (page: ReactNode) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
