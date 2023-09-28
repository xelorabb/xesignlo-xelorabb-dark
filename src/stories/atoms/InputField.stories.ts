import type { StoryObj, Meta } from '@storybook/html';
import type { InputFieldProps } from './InputField';
import { createInputField } from './InputField';

const meta = {
  title: 'Atoms/InputField',
  tags: ['autodocs'],
  render: (args) => {
    return createInputField(args);
  },
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email', 
        'password'
      ]
    },
    size: {
      control: 'select',
      options: {
        'small': 'sm',
        'medium': 'md', 
        'large': 'lg'
      }
    },
    state: {
      control: 'select',
      options: [
        'default',
        'info', 
        'success',
        'warning',
        'error'
      ]
    },
  },
} satisfies Meta<InputFieldProps>;

export default meta;
type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {},
};