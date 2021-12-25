import { ATTACK, HIT } from './constants.js';
import { getRandomNumber } from './utils.js';

export const enemyAttack = () => {
  const hit = ATTACK[getRandomNumber(0, ATTACK.length - 1)];
  const defence = ATTACK[getRandomNumber(0, ATTACK.length - 1)];

  return ({
    value: getRandomNumber(1, HIT[hit]),
    hit,
    defence,
  });
}

export const playerAttack = formFight => {
  const attack = {};

  for (let item of formFight) {
    if (item.checked && item.name === 'hit') {
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  return attack;
}
