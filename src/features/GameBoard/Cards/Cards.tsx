import React from 'react'
import { default as CardItem } from './Card';
import { usePlayerState } from '../../../context/Player';
import { Card } from '../../../types';

interface Props {
  selectCard: Function,
  selectedCard: Card | null,
}

const Cards: React.FC<Props> = ({ selectCard, selectedCard }) => {
  const { cards } = usePlayerState();

  return (
    <div>
      <ul className="mt-4 columns is-variable is-multiline is-3">
        {cards.map(({ id, effect, value }) => (
          <CardItem 
            effect={effect}
            value={value}
            selected={(selectedCard && selectedCard.id) === id}
            onClick={selectCard}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
