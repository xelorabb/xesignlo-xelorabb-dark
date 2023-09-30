import type { StoryObj, Meta } from '@storybook/html';
import type { ProgressBarProps } from './ProgressBar';
import { createProgressBar } from './ProgressBar';

const meta = {
  title: 'Atoms/ProgressBar',
  tags: ['autodocs'],
  render: (args) => {
    return createProgressBar(args);
  },
  argTypes: {
    value: { control: 'number' },
    min: { control: 'number' },
    max: { control: 'number' },
    mode: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: {
        'extra small': 'xs',
        small: 'sm',
        medium: 'md',
        large: 'lg',
      },
    },
    postfix: { control: 'text' },
  },
} satisfies Meta<ProgressBarProps>;

export default meta;
type Story = StoryObj<ProgressBarProps>;

export const PrimaryExtraSmall: Story = {
  args: {
    value: 2,
    size: 'xs',
  },
};

export const PrimarySmall: Story = {
  args: {
    value: 3,
    size: 'sm',
  },
};

export const PrimaryMedium: Story = {
  args: {
    value: 4,
    size: 'md',
  },
};

export const PrimaryLarge: Story = {
  args: {
    value: 4,
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    value: 5,
    mode: 'secondary',
  },
};
