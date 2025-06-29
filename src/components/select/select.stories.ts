import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { Select } from '.';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const select: Story = {
  args: {
    label: 'Selecione um monstro:',
    options: [
      "spider - atk: 30 | def: 20 | spd: 10 | hp 100",
      "gnome - atk: 30 | def: 20 | spd: 10 | hp 100",
      "golem - atk: 30 | def: 20 | spd: 10 | hp 100",
      "skeleton - atk: 30 | def: 20 | spd: 10 | hp 100"
    ]
  },
};