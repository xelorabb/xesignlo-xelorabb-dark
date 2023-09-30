import '../../../dist/index.css';

export interface LinkProps {
  label: string;
  href: string;
  mode?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const createLink = ({
  label,
  href,
  mode = 'primary',
  size = 'md'
}: LinkProps) => {
  let link = document.createElement('a');
  link.innerHTML = label;
  link.href = href;

  link.className = [
    'link',
    mode ? `link--${mode}` : '',
    size ? `link--${size}` : ''
  ].join(' ');

  return link;
};
