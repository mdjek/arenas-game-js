import { player1, player2 } from './game.js';
import { generateLogs } from './logger.js';
import { createReloadButton, renderPlayerWin } from './layout.js';

export const showResult = (formFight, arenasBlock) => {
  if (player1.hp === 0 || player2.hp === 0) {
    const reloadButton = createReloadButton(arenasBlock);

    reloadButton.addEventListener('click', () => {
      window.location.reload();
    });

    for (let item of formFight) {
      item.disabled = true;
    }
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    renderPlayerWin(player2.name, arenasBlock);
    generateLogs('end', player2, player1);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    renderPlayerWin(player1.name, arenasBlock);
    generateLogs('end', player1, player2);
  } else if (player1.hp === 0 && player2.hp === 0) {
    renderPlayerWin(null, arenasBlock);
    generateLogs('draw');
  }
}
