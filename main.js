const player1 = {
  name: 'SCORPION',
  hp: 45,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['example', 'gun'],
  attack: () => console.log(`${this.name} Fight...`),
};

const player2 = {
  name: 'SONYA',
  hp: 75,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['example', 'gun'],
  attack: () => console.log(`${this.name} Fight...`),
}

const createHTMLElement = (tag = 'div', classname, content) => {
  const element = document.createElement(tag);

  if (classname) {
    element.classList.add(classname);
  }

  if (['string', 'number'].includes(typeof content)) {
    element.innerHTML = content;
  }

  if (typeof content === 'object' && content.length && content.length > 0) {
     content.forEach((item) => element.appendChild(item));
  }

  return element;
}

createPlayerMarkup = (playerName, name, hp, pathToImg) => {
  const lifeEl = createHTMLElement('div', 'life', hp);
  const nameEl = createHTMLElement('div', 'name', name);
  const imgEl = createHTMLElement('img');
  imgEl.src = pathToImg;

  const progressbarEl = createHTMLElement('div', 'progressbar', [lifeEl, nameEl]);
  const characterEl = createHTMLElement('div', 'character', [imgEl]);

  return createHTMLElement('div', playerName, [progressbarEl, characterEl]);
}

const createPlayer = (playerName, data) => {
  const { name, hp, img } = data;
  const player = createPlayerMarkup(playerName, name, hp, img);

  document.querySelector('.arenas').appendChild(player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
