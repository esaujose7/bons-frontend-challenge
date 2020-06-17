import React from 'react';
import { Card as CardType } from '../../../types';

type Props = {
  card: CardType,
  setCard: (card: CardType | null) => void,
  selected: boolean,
  disabled: boolean
};

const Card: React.FC<Props> = ({ card, setCard, selected, disabled }) => (
  <li className="column is-4">
    <button onClick={() => { setCard(selected ? null : card); }} className={`button ${selected ? 'is-active is-primary' : ''}`} disabled={disabled}>
      <strong>{card.effect} {card.value} {card.value > 1 ? 'PTS' : 'PT'}</strong>
    </button>
  </li>
);

export default Card;
