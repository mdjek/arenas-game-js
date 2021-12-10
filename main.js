const NAME_MAP = {
  SCORPION: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  KITANA: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  LIUKANG: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  SONYA: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  SUBZERO: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'
};

const arenasBlock = document.querySelector('.arenas');

function Player (name, hp, weapon) {
  this.name = name;
  this.hp = hp;
  this.img = NAME_MAP[name];
  this.weapon = weapon;
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

const createPlayerMarkup = (playerName, name, hp = 100, pathToImg) => {
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

const player1 = new Player('SCORPION', 45, ['example', 'gun']);
const player2 = new Player('SONYA', 75, ['example', 'gun']);

createPlayer('player1', player1);
createPlayer('player2', player2);
