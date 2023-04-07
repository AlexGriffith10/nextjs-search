import './globals.css'
import PrimaryLayout from './components/layouts/primary/PrimaryLayout'
import SidebarLayout from './components/layouts/sidebar/SidebarLayout'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <PrimaryLayout justify="items-center"> */}
        <span>
          <SidebarLayout />
          {children}
        </span>
        {/* </PrimaryLayout> */}
      </body>
    </html>
  )
}
