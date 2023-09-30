import type { StoryObj, Meta } from '@storybook/html';
import type { ButtonProps } from './Button';
import { createButton } from './Button';

const meta = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  render: (args) => {
    return createButton(args);
  },
  argTypes: {
    label: { control: 'text' },
    size: {
      control: 'select',
      options: {
        'small': 'sm', 
        'medium': 'md', 
        'large': 'lg'
      }
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const PrimarySmall: Story = {
  args: {
    label: 'Small Button',
    size: 'sm',
    onClick: () => {}
  },
};

export const PrimaryMedium: Story = {
  args: {
    label: 'Medium Button',
    size: 'md',
    onClick: () => {}
  },
};

export const PrimaryLarge: Story = {
  args: {
    label: 'Large Button',
    size: 'lg',
    onClick: () => {}
  },
};

export const PrimaryLink: Story = {
  args: {
    label: 'Link Button',
    size: 'md',
    href: '/'
  },
};