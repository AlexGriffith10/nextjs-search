import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card, { CardProps } from './Card'
import { mockCardProps } from './Card.mocks'

export default {
  title: 'cards/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Base = Template.bind({})

Base.args = {
  ...mockCardProps.base,
} as CardProps
