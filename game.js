import { Api } from './api.js';
import { doFightStep } from './fight.js';
import { generateLogs } from './logger.js';
import { Player } from './player.js';

let player1;
let player2;

class Game {
  getLocalPlayerData = () => JSON.parse(localStorage.getItem('player1'));

  start = async () => {
    const api = new Api();
    const formFight = document.querySelector('.control');
    const arenasBlock = document.querySelector('.arenas');

    formFight.addEventListener('submit', (e) => {
      e.preventDefault();

      doFightStep(api.fightStep, formFight, arenasBlock);
    });

    const p1 = this.getLocalPlayerData() || await api.getRandomPlayer();
    const p2 = await api.getRandomPlayer();

    player1 = new Player({
      ...p1,
      id: 'player1',
      entry: arenasBlock,
    });

    player2 = new Player({
      ...p2,
      id: 'player2',
      entry: arenasBlock,
    });

    player1.createPlayer();
    player2.createPlayer();
    generateLogs('start', player1, player2);
  }
}

export { Game, player1, player2 };
