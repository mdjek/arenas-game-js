import { createPlayerMarkup } from './layout.js';

class Player {
  constructor(props) {
    this.id = props.id;
    this.name = props.name;
    this.hp = props.hp;
    this.img = props.img;
    this.entry = props.entry;
  }

  createPlayer = () => {
    const player = createPlayerMarkup(
      {
        id: this.id,
        name: this.name,
        hp: this.hp,
        img: this.img
      }
    );

    this.entry.appendChild(player);
  };

  changeHP = (value) => {
    this.hp -= value;

    if (this.hp < 0) {
      this.hp = 0;
    }
  };

  elHP = () => document.querySelector(`.${this.id} .life`);

  renderHP = () => this.elHP().style.width = `${this.hp}%`;
}

export { Player };
