import type { StoryObj, Meta } from '@storybook/html';
import type { IconProps } from './Icon';
import { createIcon } from './Icon';

const meta = {
  title: 'Ions/Icon',
  tags: ['autodocs'],
  render: (args) => {
    return createIcon(args);
  },
  argTypes: {
    name: {
      control: 'select',
      options: ['box', 'checkbox', 'checkbox-checked', 'star', 'trash'],
    },
    type: {
      control: 'select',
      options: ['regular', 'solid'],
    },
    size: {
      control: 'select',
      options: {
        'extra small': 'xs',
        small: 'sm',
        medium: 'md',
        large: 'lg',
        'extra large': 'xl',
        huge: '2xl',
      },
    },
  },
} satisfies Meta<IconProps>;

export default meta;
type Story = StoryObj<IconProps>;

function generateStory(name: string, type: any): Story {
  return {
    args: {
      name: name,
      type: type,
      size: 'md',
    },
  };
}

export const BoxRegular: Story = generateStory('box', 'regular');
export const BoxSolid: Story = generateStory('box', 'solid');

export const CheckboxRegular: Story = generateStory('checkbox', 'regular');
export const CheckboxSolid: Story = generateStory('checkbox', 'solid');

export const CheckboxCheckedRegular: Story = generateStory(
  'checkbox-checked',
  'regular'
);
export const CheckboxCheckedSolid: Story = generateStory(
  'checkbox-checked',
  'solid'
);

export const StarRegular: Story = generateStory('star', 'regular');
export const StarSolid: Story = generateStory('star', 'solid');

export const TrashRegular: Story = generateStory('trash', 'regular');
export const TrashSolid: Story = generateStory('trash', 'solid');
