import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { Modal } from '.';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClose: fn() },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const modal: Story = {
  args: {
    title: "novo modal",
    open: true,
    size: "mid",
    hideClose: false,
    children: <div>conteudo</div>
  },
};
