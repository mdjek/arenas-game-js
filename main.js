import { generateLogs } from './logs.js';
import { player1, player2 } from './player.js';
import { enemyAttack, playerAttack } from './attack.js';
import { showResult } from './result.js';
import { createPlayer } from './markup.js';

const formFight = document.querySelector('.control');

formFight.addEventListener('submit', (e) => {
  e.preventDefault();

  const enemy = enemyAttack();
  const attack = playerAttack(formFight);
  let damagePlayer1 = 0;
  let damagePlayer2 = 0;

  if (enemy.hit !== attack.defence) {
    damagePlayer1 = enemy.value;
    player1.changeHP(damagePlayer1);
    generateLogs('hit', player2, player1, damagePlayer1);
  } else{
    generateLogs('defence', player1, player2);
  }

  if (attack.hit !== enemy.defence) {
    damagePlayer2 = attack.value;
    player2.changeHP(damagePlayer2);
    generateLogs('hit', player1, player2, damagePlayer2);
  } else{
    generateLogs('defence', player2, player1);
  }

  player1.renderHP();
  player2.renderHP();

  showResult(formFight);
});

createPlayer('player1', player1);
createPlayer('player2', player2);
generateLogs('start', player1, player2);
