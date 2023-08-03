// used for any mock data needed for testing either in app or storybook
import { SearchProps } from './Search'

const base: SearchProps = {
  buttonText: 'Feelin lucky?',
}

const altText: SearchProps = {
  buttonText: 'Alt text',
}

export const mockSearchProps = {
  base,
  altText,
}
