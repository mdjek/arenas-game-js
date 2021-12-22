const arenasBlock = document.querySelector('.arenas');

export const createHTMLElement = (tag = 'div', classname, content) => {
  const element = document.createElement(tag);

  if (classname) {
    element.classList.add(classname);
  }

  if (typeof content === 'string') {
    element.innerHTML = content;
  }

  if (Array.isArray(content)) {
    content.forEach((item) => element.appendChild(item));
  }

  return element;
};

export const createPlayerMarkup = ({playerId, name, hp, img}) => {
  const lifeEl = createHTMLElement('div', 'life');
  const nameEl = createHTMLElement('div', 'name', name);
  const imgEl = createHTMLElement('img');

  lifeEl.style.width = `${hp}%`;
  imgEl.src = img;

  const progressbarEl = createHTMLElement('div', 'progressbar', [lifeEl, nameEl]);
  const characterEl = createHTMLElement('div', 'character', [imgEl]);

  return createHTMLElement('div', playerId, [progressbarEl, characterEl]);
};

export const createReloadButton = () => {
  const reloadButton = createHTMLElement('button', 'button', 'Reload');
  const reloadButtonWrapper = createHTMLElement('div', 'reloadWrap', [reloadButton]);

  arenasBlock.appendChild(reloadButtonWrapper);

  return reloadButton;
};

export const renderPlayerWin = name => {
  const winnerName = name ? `${name} wins` : 'draw';
  const winTitle = createHTMLElement('div', 'winTitle', winnerName);

  arenasBlock.appendChild(winTitle);
};

export const createPlayer = (playerId, data) => {
  const { name, hp, img } = data;
  const player = createPlayerMarkup({playerId, name, hp, img});

  arenasBlock.appendChild(player);


};
