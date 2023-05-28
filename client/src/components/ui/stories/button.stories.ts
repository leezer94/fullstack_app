import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'outline',
  },
};
