import React from 'react'
import { default as CardItem } from './Card';
import { usePlayerState } from '../../../context/Player';
import { Card } from '../../../types';

interface Props {
  setCard: (card: Card | null) => void,
  selectedCard: Card | null,
}

const Cards: React.FC<Props> = ({ setCard, selectedCard }) => {
  const { cards } = usePlayerState();

  return (
    <div>
      <ul className="mt-4 columns is-variable is-multiline is-3">
        {cards.map(card => (
          <CardItem
            key={card.id}
            card={card}
            selected={selectedCard !== null && selectedCard.id === card.id}
            setCard={setCard}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cards;
