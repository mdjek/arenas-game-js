import { enemyAttack, playerAttack } from './attack.js';
import { player1, player2 } from './player.js';
import { generateLogs } from './logger.js';
import { showResult } from './result.js';

const doFightStep = formFight => {
  const {hit: enemyHit, defence: enemyDefence, value: enemyValue} = enemyAttack();
  const { hit, defence, value } = playerAttack(formFight);
  let damagePlayer1 = 0;
  let damagePlayer2 = 0;

  if (enemyHit !== defence) {
    damagePlayer1 = enemyValue;
    player1.changeHP(damagePlayer1);
    generateLogs('hit', player2, player1, damagePlayer1);
  } else{
    generateLogs('defence', player1, player2);
  }

  if (hit !== enemyDefence) {
    damagePlayer2 = value;
    player2.changeHP(damagePlayer2);
    generateLogs('hit', player1, player2, damagePlayer2);
  } else{
    generateLogs('defence', player2, player1);
  }

  player1.renderHP();
  player2.renderHP();

  showResult(formFight);
}

export { doFightStep };
