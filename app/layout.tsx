import './globals.css'
import PrimaryLayout from './components/layouts/primary/PrimaryLayout'
// import SidebarLayout from './components/layouts/sidebar/SidebarLayout'
import { AuthProvider } from './context/auth/AuthContext'

export const metadata = {
  title: 'Workout App',
  description: 'Free workout app for kicks and giggles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <PrimaryLayout>{children}</PrimaryLayout>
        </AuthProvider>
      </body>
    </html>
  )
}
