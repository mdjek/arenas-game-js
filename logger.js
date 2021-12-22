import { LOGS } from './constants.js';
import { getRandomNumber, normalizeTime } from './utils.js';

const chatBlock = document.querySelector('.chat');

export const generateLogs = (type, { name }, { name: playerName2, hp }, damage = 0) => {
  const text = type.includes('start', 'draw')
    ? LOGS[type]
    : LOGS[type][getRandomNumber(0, LOGS[type].length - 1)];

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDate = `${normalizeTime(hours)}:${normalizeTime(minutes)}:${normalizeTime(seconds)}`;

  let logMessage = '';

  switch(type) {
    case 'start':
      logMessage = text
        .replace('[time]', formattedDate)
        .replace('[player1]', name)
        .replace('[player2]', playerName2);
      break;
    case 'end':
      logMessage = `${formattedDate} - ${text}`;
      logMessage = text
        .replace('[playerWins]', name)
        .replace('[playerLose]', playerName2);
      break;
    case 'hit':
      logMessage = `${formattedDate} - ${text} -${damage} [${hp}/100]`
        .replace('[playerKick]', name)
        .replace('[playerDefence]', playerName2);
      break;
    case 'defence':
      logMessage = `${formattedDate} - ${text}`
        .replace('[playerDefence]', name)
        .replace('[playerKick]', playerName2);
      break;
    default:
      logMessage = text;
  }

  chatBlock.insertAdjacentHTML('afterbegin', `<p>${logMessage}</p>`)
}
