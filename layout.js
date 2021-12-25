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

export const createPlayerMarkup = ({ id, name, hp, img }) => {
  const lifeEl = createHTMLElement('div', 'life');
  const nameEl = createHTMLElement('div', 'name', name);
  const imgEl = createHTMLElement('img');

  lifeEl.style.width = `${hp}%`;
  imgEl.src = img;

  const progressbarEl = createHTMLElement('div', 'progressbar', [lifeEl, nameEl]);
  const characterEl = createHTMLElement('div', 'character', [imgEl]);

  return createHTMLElement('div', id, [progressbarEl, characterEl]);
};

export const createReloadButton = (arenasBlock) => {
  const reloadButton = createHTMLElement('button', 'button', 'Reload');
  const reloadButtonWrapper = createHTMLElement('div', 'reloadWrap', [reloadButton]);

  arenasBlock.appendChild(reloadButtonWrapper);

  return reloadButton;
};

export const renderPlayerWin = (name, arenasBlock) => {
  const winnerName = name ? `${name} wins` : 'draw';
  const winTitle = createHTMLElement('div', 'winTitle', winnerName);

  arenasBlock.appendChild(winTitle);
};
