import React from 'react'

interface Props {
  name: string,
  hp: number,
  maxHp: number,
  shield: number
}

const ParticipantInfo: React.FC<Props> = ({ name, hp, maxHp, shield }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="hp-name" style={{ marginRight: '20px' }}>
        {name}<br/>
        HP: {hp} / {maxHp}
      </div>
      <div className="shield">
        Shield: {shield}
      </div>
    </div>
  );
};

export default ParticipantInfo;
