const NAME_MAP = {
  SCORPION: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  KITANA: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  LIUKANG: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  SONYA: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  SUBZERO: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'
};

const arenasBlock = document.querySelector('.arenas');
const randomButton = document.querySelector('.control button');

const between = (min = 1, max = 20) => {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
};

function Player (name, weapon, position, hp = 100) {
  this.name = name;
  this.weapon = weapon;
  this.player = position;
  this.hp = hp;
  this.img = NAME_MAP[name];
  this.attack = function () { console.log(`${this.name} Fight...`) };
}

const createHTMLElement = (tag = 'div', classname, content) => {
  const element = document.createElement(tag);

  if (classname) {
    element.classList.add(classname);
  }

  if (typeof content === 'string') {
    element.innerHTML = content;
  }

  if (typeof content === 'object' && content.length && content.length > 0) {
    content.forEach((item) => element.appendChild(item));
  }

  return element;
}

const createPlayerMarkup = (playerName, name, hp, pathToImg) => {
  const lifeEl = createHTMLElement('div', 'life');
  const nameEl = createHTMLElement('div', 'name', name);
  const imgEl = createHTMLElement('img');

  lifeEl.style.width = `${hp}%`;
  imgEl.src = pathToImg;

  const progressbarEl = createHTMLElement('div', 'progressbar', [lifeEl, nameEl]);
  const characterEl = createHTMLElement('div', 'character', [imgEl]);

  return createHTMLElement('div', playerName, [progressbarEl, characterEl]);
}

const createPlayer = (playerName, data) => {
  const { name, hp, img } = data;
  const player = createPlayerMarkup(playerName, name, hp, img);

  arenasBlock.appendChild(player);
}

const changeHP = (player, opponent) => {
  const playerLife = document.querySelector(`.player${player.player} .life`);

  player.hp -= between();

  if (player.hp <= 0) {
    player.hp = 0;
    randomButton.disabled = true;

    renderPlayerWin(opponent.name);
  }

  playerLife.style.width = `${player.hp}%`;
}

const renderPlayerWin = (name) => {
  const winTitle = createHTMLElement('div', 'winTitle', `${name} wins`);

  arenasBlock.appendChild(winTitle);
}

const player1 = new Player('SCORPION', ['example', 'gun'], 1);
const player2 = new Player('SONYA', ['example', 'gun'], 2);

randomButton.addEventListener('click', () => {
  changeHP(player1, player2);
  changeHP(player2, player1);
});

createPlayer('player1', player1);
createPlayer('player2', player2);
