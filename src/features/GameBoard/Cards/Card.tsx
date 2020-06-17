import React from 'react'

const Card: React.FC<{ effect: string, value: number, onClick: Function, selected: boolean }> = ({ effect, value }) => {
  return (
    <li className="column is-4">
      {effect}<br/>
      Amount: {value}
    </li>
  );
};

export default Card;
