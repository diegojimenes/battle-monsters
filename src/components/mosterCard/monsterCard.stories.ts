import type { Meta, StoryObj } from '@storybook/react-vite';

// import { fn } from 'storybook/test';
import { MonsterCard } from '.';

const meta = {
  title: 'Components/MosterCard',
  component: MonsterCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // args: { onClick: fn() },
} satisfies Meta<typeof MonsterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const skeleton: Story = {
  args: {
    name: "skeleton",
    attack: 13,
    defense: 15,
    speed: 20,
    hp: 100,
    type: "skeleton",
    isHit: false
  },
};

export const gnome: Story = {
  args: {
    name: "gnome",
    attack: 30,
    defense: 15,
    speed: 20,
    hp: 100,
    type: "gnome",
    isHit: false
  },
};

export const golem: Story = {
  args: {
    name: "golem",
    attack: 10,
    defense: 15,
    speed: 20,
    hp: 100,
    type: "golem",
    isHit: false
  },
};

export const spider: Story = {
  args: {
    name: "spider",
    attack: 10,
    defense: 15,
    speed: 20,
    hp: 100,
    type: "spider",
    isHit: false
  },
};