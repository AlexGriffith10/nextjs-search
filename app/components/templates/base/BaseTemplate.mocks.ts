// used for any mock data needed for testing either in app or storybook
import { IBaseTemplate } from './BaseTemplate'

const base: IBaseTemplate = {
  sampleTextProp: 'Hello World!',
}

const altText: IBaseTemplate = {
  sampleTextProp: 'Alt text',
}

export const mockBaseTemplateProps = {
  base,
  altText,
}
