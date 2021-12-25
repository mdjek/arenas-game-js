import { doFightStep } from './fight.js';
import { createPlayer } from './layout.js';
import { player1, player2 } from './player.js';
import { generateLogs } from './logger.js';

class Game {
  start = () => {
    const formFight = document.querySelector('.control');

    formFight.addEventListener('submit', (e) => {
      e.preventDefault();

      doFightStep(formFight);
    });

    createPlayer('player1', player1);
    createPlayer('player2', player2);
    generateLogs('start', player1, player2);
  }
}

export { Game };
