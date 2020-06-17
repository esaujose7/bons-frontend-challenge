import React from 'react';
import { Card as CardType } from '../../../types';

type Props = {
  card: CardType,
  setCard: (card: CardType | null) => void,
  selected: boolean,
};

const Card: React.FC<Props> = ({ card, setCard, selected }) => (
  <li className={`column is-4 ${selected ? 'is-primary' : ''}`} onClick={() => { setCard(selected ? null : card); }}>
    {card.effect}<br/>
    Amount: {card.value}
  </li>
);

export default Card;
