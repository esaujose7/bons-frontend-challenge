import React from 'react'

type EndGameResult = 'WIN' | 'LOSE';

const EndGameModal: React.FC<{ result: EndGameResult }> = ({ result }) => {
  return (
    <div>
      {result}
    </div>
  )
}

export default EndGameModal;
