import React from 'react'

interface Props {
  name: string,
  hp: number,
  maxHp: number,
  shield: number
}

const ParticipantInfo: React.FC<Props> = ({ name, hp, maxHp, shield }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="hp-name">
          <strong>{name}</strong><br/>
          <strong>HP: </strong>{hp} / {maxHp}
        </div>
        <div className="shield">
          <strong>Shield:</strong> {shield}
        </div>
      </div>
    </div>
  );
};

export default ParticipantInfo;
