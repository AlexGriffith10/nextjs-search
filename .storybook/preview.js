import * as NextImage from 'next/image'
import '../app/page.module.css'
import '../app/globals.css'
import { AuthProvider } from '../app/context/auth/AuthContext'

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, value], idx) => {
    console.log(value)
    return [
      key,
      {
        name: key,
        styles: {
          width: `${value}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ]
  })
)

//Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const decorators = [
  (Story) => (
    <AuthProvider>
      <Story />
    </AuthProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
}
