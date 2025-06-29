import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { ImageType } from '.';

const meta = {
  title: 'Components/ImageType',
  component: ImageType,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof ImageType>;

export default meta;
type Story = StoryObj<typeof meta>;

export const skeleton: Story = {
  args: {
    active: false,
    type: "skeleton"
  },
};

export const gnome: Story = {
  args: {
    active: false,
    type: "gnome"
  },
};

export const golem: Story = {
  args: {
    active: false,
    type: "golem"
  },
};

export const spider: Story = {
  args: {
    active: false,
    type: "spider"
  },
};