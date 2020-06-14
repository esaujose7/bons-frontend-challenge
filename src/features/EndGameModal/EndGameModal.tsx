import React from 'react'

interface Props {
  result: 'WIN' | 'LOSE';
};

const EndGameModal: React.FC<Props> = ({ result }) => {
  return (
    <div>
      {result}
    </div>
  )
}

export default EndGameModal;
