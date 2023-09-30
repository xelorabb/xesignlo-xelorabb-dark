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
    value: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password'],
    },
    size: {
      control: 'select',
      options: {
        small: 'sm',
        medium: 'md',
        large: 'lg',
      },
    },
    state: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
    },
  },
} satisfies Meta<InputFieldProps>;

export default meta;
type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    value: 'Input Field Value',
    state: 'default',
    size: 'sm',
    type: 'text',
  },
};

export const Medium: Story = {
  args: {
    value: 'Input Field Value',
    state: 'default',
    size: 'md',
    type: 'text',
  },
};

export const Large: Story = {
  args: {
    value: 'Input Field Value',
    state: 'default',
    size: 'lg',
    type: 'text',
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'placeholder text',
    state: 'default',
    size: 'lg',
    type: 'text',
  },
};

export const Info: Story = {
  args: {
    value: 'Info Field',
    state: 'info',
    size: 'lg',
    type: 'text',
  },
};

export const Success: Story = {
  args: {
    value: 'Success Field',
    state: 'success',
    size: 'lg',
    type: 'text',
  },
};

export const Warning: Story = {
  args: {
    value: 'Warning Field',
    state: 'warning',
    size: 'lg',
    type: 'text',
  },
};

export const Error: Story = {
  args: {
    value: 'Error Field',
    state: 'error',
    size: 'lg',
    type: 'text',
  },
};
