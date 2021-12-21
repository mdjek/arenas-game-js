const logs = {
  start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
    'Результат удара [playerWins]: [playerLose] - труп',
    '[playerLose] погиб от удара бойца [playerWins]',
    'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
    '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
    '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
    '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
    '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
    '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
    '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
    '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
    '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
    '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
    '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
    '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
    '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
    '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
    '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
    '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
    '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
    '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
    '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
  ],
  defence: [
    '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
    '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
    '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
    '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
    '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
    '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
  ],
  draw: 'Ничья - это тоже победа!'
};

const NAME_MAP = {
  SCORPION: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  KITANA: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  LIUKANG: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  SONYA: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  SUBZERO: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif'
};

const HIT = {
  head: 30,
  body: 25,
  foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];

const arenasBlock = document.querySelector('.arenas');
const formFight = document.querySelector('.control');
const chatBlock = document.querySelector('.chat');

const getRandomNumber = (min = 1, max = 20) => {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  );
};

const player1 = {
  name: 'SCORPION',
  hp: 100,
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
  hp: 100,
  player: 2,
  img: (function() { return NAME_MAP['SONYA'] })(),
  weapon: ['example', 'gun'],
  attack: () => console.log(`${this.name} Fight...`),
  changeHP,
  elHP,
  renderHP
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

const enemyAttack = () => {
  const hit = ATTACK[getRandomNumber(0, 2)];
  const defence = ATTACK[getRandomNumber(0, 2)];

  return({
    value: getRandomNumber(0, HIT[hit]),
    hit,
    defence,
  });
}

const playerAttack = () => {
  const attack = {};

  for (let item of formFight) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandomNumber(0, HIT[item.value]);
      attack.hit = item.value;
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value;
    }

    item.checked = false;
  }

  return attack;
}

const showResult = () => {
  if (player1.hp === 0 || player2.hp === 0) {
    reloadButton.style.display = 'block';

    for (let item of formFight) {
      item.disabled = true;
    }
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    renderPlayerWin(player2.name);
    generateLogs('end', player2, player1);
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    renderPlayerWin(player1.name);
    generateLogs('end', player1, player2);
  } else if (player1.hp === 0 && player2.hp === 0) {
    renderPlayerWin();
    generateLogs('draw');
  }
}

const generateLogs = (type, player1, player2, damage = 0) => {
  if ((type === 'hit' && damage === 0) || (type === 'defence' && damage !== 0)) {
    return;
  }

  const text = type.includes('start', 'draw')
    ? logs[type]
    : logs[type][getRandomNumber(0, logs[type].length - 1)];

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedDate = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

  let logMessage = '';

  switch(type) {
    case 'start':
      logMessage = text
        .replace('[time]', formattedDate)
        .replace('[player1]', player1.name)
        .replace('[player2]', player2.name);
      break;
    case 'end':
      logMessage = text
        .replace('[playerWins]', player1.name)
        .replace('[playerLose]', player2.name);
      break;
    case 'hit':
      logMessage = `${formattedDate} - ${text} -${damage} [${player2.hp}/100]`
        .replace('[playerKick]', player1.name)
        .replace('[playerDefence]', player2.name);
      break;
    case 'defence':
      logMessage = `${formattedDate} - ${text}`
        .replace('[playerDefence]', player1.name)
        .replace('[playerKick]', player2.name);
      break;
    default:
      logMessage = text;
  }

  chatBlock.insertAdjacentHTML('afterbegin', `<p>${logMessage}</p>`)
}

const reloadButton = createReloadButton();

reloadButton.addEventListener('click', () => {
  window.location.reload();
});

formFight.addEventListener('submit', (e) => {
  e.preventDefault();

  const enemy = enemyAttack();
  const attack = playerAttack();
  const damagePlayer1 = enemy.hit === attack.defence ? 0 : enemy.value;
  const damagePlayer2 = attack.hit === enemy.defence ? 0 : attack.value;

  player1.changeHP(damagePlayer1);
  player2.changeHP(damagePlayer2);

  generateLogs('hit', player2, player1, damagePlayer1);
  generateLogs('hit', player1, player2, damagePlayer2);
  generateLogs('defence', player1, player2, damagePlayer1);
  generateLogs('defence', player2, player1, damagePlayer2);

  player1.renderHP();
  player2.renderHP();

  showResult();
});

createPlayer('player1', player1);
createPlayer('player2', player2);
generateLogs('start', player1, player2);
