import React from 'react'
import { usePlayerState } from '../../../context/Player';

interface Props {
  selectCard: Function
}

const Cards: React.FC<Props> = ({ selectCard }) => {
  const { cards } = usePlayerState();

  return (
    <ul style={{ display: 'flex' }}>
      {cards.map(card => {
        return (
          <li onClick={() => { selectCard(card); }}>
            {card.effect}<br/>
            Amount: {card.value}
          </li>
        )
      })}
    </ul>
  );
};

export default Cards;
