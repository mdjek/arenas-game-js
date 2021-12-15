const NAME_MAP = {
  SCORPION: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  KITANA: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  LIUKANG: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  SONYA: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  SUBZERO: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'
};

const arenasBlock = document.querySelector('.arenas');
const randomButton = document.querySelector('.control button');

const getRandomNumber = (min = 1, max = 20) => {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
};

const player1 = {
  name: 'SCORPION',
  hp: 45,
  player: 1,
  img: (function () {
    return NAME_MAP['SCORPION']
  })(),
  weapon: ['example', 'gun'],
  attack: function () {
    console.log(`${this.name} Fight...`)
  },
  changeHP,
  elHP,
  renderHP
};

const player2 = {
  name: 'SONYA',
  hp: 75,
  player: 2,
  img: (function() { return NAME_MAP['SONYA'] })(),
  weapon: ['example', 'gun'],
  attack: () => console.log(`${this.name} Fight...`),
  changeHP,
  elHP,
  renderHP
};

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
};

const createPlayerMarkup = (playerName, name, hp, pathToImg) => {
  const lifeEl = createHTMLElement('div', 'life');
  const nameEl = createHTMLElement('div', 'name', name);
  const imgEl = createHTMLElement('img');

  lifeEl.style.width = `${hp}%`;
  imgEl.src = pathToImg;

  const progressbarEl = createHTMLElement('div', 'progressbar', [lifeEl, nameEl]);
  const characterEl = createHTMLElement('div', 'character', [imgEl]);

  return createHTMLElement('div', playerName, [progressbarEl, characterEl]);
};

const createPlayer = (playerName, data) => {
  const { name, hp, img } = data;
  const player = createPlayerMarkup(playerName, name, hp, img);

  arenasBlock.appendChild(player);
};

const renderPlayerWin = (name) => {
  const winnerName = name ? `${name} wins` : 'draw';

  const winTitle = createHTMLElement('div', 'winTitle', winnerName);

  arenasBlock.appendChild(winTitle);
};

const createReloadButton = () => {
  const reloadButton = createHTMLElement('button', 'button', 'Reload');
  const reloadButtonWrapper = createHTMLElement('div', 'reloadWrap', [reloadButton]);

  arenasBlock.appendChild(reloadButtonWrapper);

  return reloadButton;
};

function changeHP(value) {
  this.hp -= value;

  if (this.hp < 0) {
    this.hp = 0;
  }
}

function elHP() {
  return document.querySelector(`.player${this.player} .life`);
}

function renderHP() {
  const lifeEl = this.elHP();
  lifeEl.style.width = `${this.hp}%`;
}

const reloadButton = createReloadButton();

reloadButton.addEventListener('click', () => {
  window.location.reload();
});

randomButton.addEventListener('click', () => {
  player1.changeHP(getRandomNumber());
  player2.changeHP(getRandomNumber());

  player1.renderHP();
  player2.renderHP();

  if (player1.hp === 0 || player2.hp === 0) {
    randomButton.disabled = true;
    reloadButton.style.display = 'block';
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    renderPlayerWin(player2.name);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    renderPlayerWin(player1.name);
  } else if (player1.hp === 0 && player2.hp === 0) {
    renderPlayerWin();
  }
});

createPlayer('player1', player1);
createPlayer('player2', player2);
