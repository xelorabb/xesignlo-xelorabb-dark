import '../../../dist/index.css';

export interface CardProps {
  header?: HTMLElement;
  content?: HTMLElement;
  footer?: HTMLElement;
}

export const createCard = ({ header, content, footer }: CardProps) => {
  let cardHeader, cardFooter;
  const card = document.createElement('div');
  card.classList.add('card');

  if (header) {
    cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.append(header);
    card.append(cardHeader);
  }

  const cardContent = document.createElement('div');
  if (content) {
    cardContent.append(content);
  }
  cardContent.classList.add('card-content');
  card.append(cardContent);

  if (footer) {
    cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    cardFooter.append(footer);
    card.append(cardFooter);
  }

  return card;
};
