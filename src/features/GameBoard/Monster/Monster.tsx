import React from 'react'
import ParticipantInfo from '../../../components/ParticipantInfo';
import { useMonsterState } from '../../../context/Monster';

const Enemy = () => {
  const { name, hp, maxHp, shield, image } = useMonsterState();

  return (
    <ParticipantInfo name={name} hp={hp} maxHp={maxHp} shield={shield} image={image} />
  );
};

export default Enemy
