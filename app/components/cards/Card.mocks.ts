// used for any mock data needed for testing either in app or storybook
import { CardProps } from './Card'

const base: CardProps = {
  author: 'Cool User',
  body: 'Super cool text for a super cool component.',
  tag: 'exampleTag',
  time: '2h ago',
  title: 'Example Title',
}

const altText: CardProps = {
  author: 'Alex',
  body: 'Lorem ipsum something something something',
  tag: 'cardTag',
  time: '2d ago',
  title: 'Alternate Title',
}

export const mockCardProps = {
  base,
  altText,
}
