import React from 'react'
import { usePlayerState } from '../../../context/Player';
import { Card } from '../../../types';

interface Props {
  selectCard: Function,
  selectedCard: Card | null,
}

const Cards: React.FC<Props> = ({ selectCard, selectedCard }) => {
  const { cards } = usePlayerState();

  return (
    <ul style={{ display: 'flex' }}>
      {cards.map(card => {
        let isSelected = selectedCard && selectedCard.id === card.id;

        return (
          <li onClick={() => { selectCard(card); }} style={{ border: !!isSelected  ? '2px red solid' : '' }} >
            {card.effect}<br/>
            Amount: {card.value}
          </li>
        )
      })}
    </ul>
  );
};

export default Cards;
