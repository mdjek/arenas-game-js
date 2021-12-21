import { NAME_MAP } from './constants.js';

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
  this.elHP().style.width = `${this.hp}%`;
}

export const player1 = {
  name: 'SCORPION',
  hp: 100,
  player: 1,
  img: NAME_MAP['SCORPION'],
  weapon: ['example', 'gun'],
  changeHP,
  elHP,
  renderHP
};

export const player2 = {
  name: 'SONYA',
  hp: 100,
  player: 2,
  img: NAME_MAP['SONYA'],
  weapon: ['example', 'gun'],
  changeHP,
  elHP,
  renderHP
};
