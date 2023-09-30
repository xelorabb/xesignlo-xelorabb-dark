import '../../../dist/index.css';

export interface ButtonProps {
  label: string;
  mode: ButtonMode;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
}

export const createButton = ({
  label,
  mode = 'primary',
  size = 'md',
  href = '/',
  onClick,
}: ButtonProps) => {
  let btn;

  if (onClick) {
    btn = document.createElement('button');
    btn.type = 'button';
    btn.addEventListener('click', onClick);
  } else {
    btn = document.createElement('a');
    btn.href = href;
  }

  btn.innerText = label;
  btn.className = ['btn', `btn--${mode}`, `btn--${size}`].join(' ');

  return btn;
};
