import './globals.css'
import PrimaryLayout from './components/layouts/primary/PrimaryLayout'
import { AuthProvider } from './context/auth/AuthContext'
import { ProductsProvider } from './context/products/ProductsContext'

export const metadata = {
  title: 'Search App',
  description: 'Search app for kicks and giggles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ProductsProvider>
          <AuthProvider>
            <PrimaryLayout>{children}</PrimaryLayout>
          </AuthProvider>
        </ProductsProvider>
      </body>
    </html>
  )
}
