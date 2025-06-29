import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { Input } from '.';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    label: 'Nome:',
    type: 'text',
    error: ""
  },
};

export const Number: Story = {
  args: {
    label: 'Attack:',
    type: 'number',
    error: ""
  },
};