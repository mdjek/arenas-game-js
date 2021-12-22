import { NAME_MAP } from './constants.js';

class Player {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
  }

  changeHP = (value) => {
    this.hp -= value;

    if (this.hp < 0) {
      this.hp = 0;
    }
  };

  elHP = () => document.querySelector(`.player${this.id} .life`);

  renderHP = () => this.elHP().style.width = `${this.hp}%`;
}

export const player1 = new Player({
  id: 1,
  name: 'SCORPION',
  hp: 100,
  img: NAME_MAP['SCORPION'],
});

export const player2 = new Player({
  id: 2,
  name: 'SONYA',
  hp: 100,
  img: NAME_MAP['SONYA'],
});
