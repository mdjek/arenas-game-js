import { playerAttack } from './attack.js';
import { player1, player2 } from './game.js';
import { generateLogs } from './logger.js';
import { showResult } from './result.js';

const doFightStep = async (fightAction, formFight, arenasBlock) => {
  const { hit, defence } = playerAttack(formFight);

  const resultFightAction = await fightAction({
    hit,
    defence,
  });

  const { player1: player, player2: enemy } = resultFightAction;
  const { hit: playerHit, defence: playerDefence, value: playerValue } = player;
  const { hit: enemyHit, defence: enemyDefence, value: enemyValue } = enemy;

  let damagePlayer1 = 0;
  let damagePlayer2 = 0;

  if (enemyHit !== playerDefence) {
    damagePlayer1 = enemyValue;
    player1.changeHP(damagePlayer1);
    generateLogs('hit', player2, player1, damagePlayer1);
  } else {
    generateLogs('defence', player1, player2);
  }

  if (playerHit !== enemyDefence) {
    damagePlayer2 = playerValue;
    player2.changeHP(damagePlayer2);
    generateLogs('hit', player1, player2, damagePlayer2);
  } else {
    generateLogs('defence', player2, player1);
  }

  player1.renderHP();
  player2.renderHP();

  showResult(formFight, arenasBlock);
}

export { doFightStep };
