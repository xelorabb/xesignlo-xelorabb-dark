import type { StoryObj, Meta } from '@storybook/html';
import type { LinkProps } from './Link';
import { createLink } from './Link';

const meta = {
  title: 'Atoms/Link',
  tags: ['autodocs'],
  render: (args) => {
    return createLink(args);
  },
  argTypes: {
    label: { control: 'text' },
    href: { control: 'text' },
    mode: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    size: {
      control: 'select',
      options: {
        'small': 'sm', 
        'medium': 'md', 
        'large': 'lg'
      }
    },
  },
} satisfies Meta<LinkProps>;

export default meta;
type Story = StoryObj<LinkProps>;

export const LinkSmall: Story = {
  args: {
    label: 'Small Link',
    href: '/',
    size: 'sm'
  },
};

export const LinkMedium: Story = {
  args: {
    label: 'Medium Link',
    href: '/',
    size: 'md'
  },
};

export const LinkLarge: Story = {
  args: {
    label: 'Large Link',
    href: '/',
    size: 'lg'
  },
};

export const LinkSecondary: Story = {
  args: {
    label: 'Secondary Link',
    href: '/',
    mode: 'secondary',
    size: 'md'
  },
};