import { ComponentStory, ComponentMeta } from '@storybook/react'
import SearchResult, { SearchResultProps } from './SearchResult'
import { mockSearchResultProps } from './SearchResult.mocks'

export default {
  title: 'search/searchResult/SearchResults',
  component: SearchResult,
  argTypes: {},
} as ComponentMeta<typeof SearchResult>

const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
)

export const Base = Template.bind({})

Base.args = {
  ...mockSearchResultProps.base,
} as SearchResultProps
