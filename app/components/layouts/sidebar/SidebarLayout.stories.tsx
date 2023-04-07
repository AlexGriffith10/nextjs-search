import { ComponentMeta, ComponentStory } from '@storybook/react'
import SidebarLayout, { SidebarLayoutProps } from './SidebarLayout'
import { mockSidebarLayoutProps } from './SidebarLayout.mocks'

export default {
  title: 'layouts/SidebarLayout',
  component: SidebarLayout,
  argTypes: {},
} as ComponentMeta<typeof SidebarLayout>

const Template: ComponentStory<typeof SidebarLayout> = (args) => (
  <SidebarLayout {...args} />
)

export const Base = Template.bind({})

Base.args = {
  ...mockSidebarLayoutProps.base,
} as SidebarLayoutProps
