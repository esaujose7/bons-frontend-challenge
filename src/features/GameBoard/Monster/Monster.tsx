import React from 'react'
import ParticipantInfo from '../../../components/ParticipantInfo';
import { useMonsterState } from '../../../context/Monster';
import { MonsterEffectsEntity } from '../../../types';

type Props = {
  lastMonsterEffect: MonsterEffectsEntity | null
}

const outputReadableMonsterEffectMessage = (monsterName: string, monsterEffect: MonsterEffectsEntity) => {
  const monsterMessagesDict = {
    HEAL: `${monsterName} healed himself for an amount of ${monsterEffect.value} points.`,
    SHIELD: `${monsterName} shielded himself for an amount of ${monsterEffect.value} points.`,
    DAMAGE: `${monsterName} damaged you for an amount of ${monsterEffect.value} points. Be sure to heal or shield up!`,
    HORROR: `${monsterName} just horrored you!`
  };
  return monsterMessagesDict[monsterEffect.effect];
};

const Monster: React.FC<Props> = ({ lastMonsterEffect }) => {
  const { name, hp, maxHp, shield, image } = useMonsterState();

  return (
    <ParticipantInfo name={name} hp={hp} maxHp={maxHp} shield={shield} image={image}>
      {lastMonsterEffect && (
        <p>
          {outputReadableMonsterEffectMessage(name, lastMonsterEffect)}
        </p>
      )}
    </ParticipantInfo>
  );
};

export default Monster
