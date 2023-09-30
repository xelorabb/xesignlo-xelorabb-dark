import '../../../dist/index.css';

export interface ProgressBarProps {
  value: number;
  min?: number;
  max?: number;
  postfix?: string;
  mode?: 'primary' | 'secondary';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export const createProgressBar = ({
  value,
  min = 0,
  max = 100,
  postfix = '%',
  mode = 'primary',
  size = 'md',
}: ProgressBarProps) => {
  let progressBar = document.createElement('div');
  let progress = document.createElement('div');
  let label = document.createElement('label');

  label.innerHTML = `${value}${postfix}`;
  progress.style.width = `${((value - min) / (max - min)) * 100}%`;

  progressBar.className = [
    'progress-bar',
    `progress-bar--${mode}`,
    `progress-bar--${size}`,
  ].join(' ');

  progressBar.appendChild(progress);
  progressBar.appendChild(label);

  return progressBar;
};
