import React from 'react'

interface Props {
  name: string,
  hp: number,
  maxHp: number,
  shield: number,
  image?: string | null,
}

const ParticipantInfo: React.FC<Props> = ({ name, hp, maxHp, shield, image = null }) => (
  <div className="card">
    <div className="card-content">
      {image && (
        <div>
          <img src={image} alt={`Participant: ${name}`} />
        </div>
      )}
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

export default ParticipantInfo;
