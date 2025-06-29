import type { Meta, StoryObj } from '@storybook/react-vite';

// import { fn } from 'storybook/test';
import { Log } from '.';

const meta = {
  title: 'Components/Log',
  component: Log,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // args: { onChange: fn() },
} satisfies Meta<typeof Log>;

export default meta;
type Story = StoryObj<typeof meta>;

export const log: Story = {
  args: {
    logs: [
      "⚔️ Round 1: 123 ataca teste causando 10 de dano!",
      "⚔️ Round 2: teste ataca 123 causando 1 de dano!",
      "⚔️ Round 3: 123 ataca teste causando 10 de dano!",
      "⚔️ Round 4: teste ataca 123 causando 1 de dano!",
      "⚔️ Round 5: 123 ataca teste causando 10 de dano!",
      "⚔️ Round 6: teste ataca 123 causando 1 de dano!",
      "⚔️ Round 7: 123 ataca teste causando 10 de dano!",
      "⚔️ Round 8: teste ataca 123 causando 1 de dano!"
    ]
  },
};