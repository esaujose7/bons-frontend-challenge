import React from 'react'
import ParticipantInfo from '../ParticipantInfo';
import { usePlayerState } from '../../../context/Player';

const Player = () => {
  const { name, hp, maxHp, shield } = usePlayerState();

  return (
    <ParticipantInfo name={name} hp={hp} maxHp={maxHp} shield={shield} />
  )
}

export default Player