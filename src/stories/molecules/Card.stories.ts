import type { StoryObj, Meta } from '@storybook/html';
import type { CardProps } from './Card';
import { createCard } from './Card';

const meta = {
  title: 'Molecules/Card',
  tags: ['autodocs'],
  render: (args) => {
    return createCard(args);
  },
  argTypes: {},
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<CardProps>;

const header = document.createElement('div');
header.innerText = "Header";

const content = document.createElement('div');
content.innerText = "Content";

const footer = document.createElement('div');
footer.innerText = "Footer";

const icon = document.createElement('i');
icon.className = [
  "fa-sharp", 
  "fa-solid",
  "fa-user"
].join(' ');
content.append(icon);

export const Default: Story = {
  args: {
    content: content.cloneNode(true) as HTMLElement
  },
}

export const WithHeader: Story = {
  args: {
    header: header.cloneNode(true) as HTMLElement,
    content: content.cloneNode(true) as HTMLElement
  },
};

export const WithFooter: Story = {
  args: {
    content: content.cloneNode(true) as HTMLElement,
    footer: footer.cloneNode(true) as HTMLElement
  },
};

export const Full: Story = {
  args: {
    header: header.cloneNode(true) as HTMLElement,
    content: content.cloneNode(true) as HTMLElement,
    footer: footer.cloneNode(true) as HTMLElement
  },
};