import Phaser from 'phaser';
import AnalogCounter from './analog-counter.ts';

const config = {
  type: Phaser.AUTO,
  width: 900,
  height: 550,
  backgroundColor: 0x000000,
  scene: {
    create,
  },
};

const game = new Phaser.Game(config);

function create() {
  const counter = new AnalogCounter(this, 500, 50);
  const counter1 = new AnalogCounter(this, 200, 125, {
    backgroundColor:
      // trying to go transparent
      '#0000ffff',
    fontColor: '#ffffff',
    digits: 3,
  });
  const counter2 = new AnalogCounter(this, 200, 200, {
    duration: 500, backgroundColor: 0x0000cc, fontColor: '#ffffff', digits: 2,
  });

  counter.setOrigin(0.5);

  counter1.setOrigin(0.5);

  counter2.setOrigin(0.5);

  this.input.on('pointerdown', () => {
    counter.setNumber(Phaser.Math.Between(10, 999999));
    counter1.setNumber(Phaser.Math.Between(1, 999));
    counter2.setNumber(Phaser.Math.Between(1, 99));
  });
}
