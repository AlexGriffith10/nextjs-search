// used for any mock data needed for testing either in app or storybook
import { SearchResultProps } from './SearchResult'

const base: SearchResultProps = {
  title: 'Cool Test Title',
  url: 'www.coolstuff.com/awesome',
  text: 'Random text for things and stuff. dlkfjalkfjlakdfldasjflakdsjflaskfjlas',
}

const altText: SearchResultProps = {
  title: 'Alt title for test',
  url: 'www.alternativeurl.com/alternatives',
  text: 'This is alternative text for science. aldkfjdakfjalsdkfjlasdkjflasdjfladskfjlasdkjf',
}

export const mockSearchResultProps = {
  base,
  altText,
}
