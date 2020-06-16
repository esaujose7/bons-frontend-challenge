import React from 'react'
import ParticipantInfo from '../ParticipantInfo';
import { useMonsterState } from '../../../context/Monster';

const Enemy = () => {
  const { name, hp, maxHp, shield } = useMonsterState();

  return (
    <ParticipantInfo name={name} hp={hp} maxHp={maxHp} shield={shield} />
  )
}

export default Enemy
