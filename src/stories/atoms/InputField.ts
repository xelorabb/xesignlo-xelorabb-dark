import '../../../dist/index.css';

export interface InputFieldProps {
  type?: 'text' | 'email' | 'password';
  state?: 'default' | 'info' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  placeholder?: string;
}

export const createInputField = ({
  type = 'text',
  state = 'default',
  size = 'md',
  value,
  placeholder,
}: InputFieldProps) => {
  const input = document.createElement('input');
  input.type = type;
  input.className = [
    'input-field',
    `input-field--${state}`,
    `input-field--${size}`,
  ].join(' ');

  if (value) {
    input.value = value;
  }
  if (placeholder) {
    input.placeholder = placeholder;
  }

  return input;
};
