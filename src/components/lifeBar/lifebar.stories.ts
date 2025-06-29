import type { Meta, StoryObj } from '@storybook/react-vite';

// import { fn } from 'storybook/test';
import { LifeBar } from '.';

const meta = {
  title: 'Components/LifeBar',
  component: LifeBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // args: { onChange: fn() },
} satisfies Meta<typeof LifeBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const select: Story = {
  args: {
    name: 'teste',
    life: '80%',
    side: "left"
  },
};