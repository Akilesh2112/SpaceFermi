import Phaser from 'phaser';
import AnalogCounter from '../components/analog-counter.ts';

class Counter extends Phaser.Scene {
  constructor() {
    super({ key: 'Counter' });
  }

  create() {
    const counter = new AnalogCounter(this, 500, 50);
    const counter1 = new AnalogCounter(this, 500, 125, {
      backgroundColor:
        // trying to go transparent
        '#0000ffff',
      fontColor: '#ffffff',
      digits: 3,
    });
    const counter2 = new AnalogCounter(this, 500, 200, {
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

    this.scene.start('Counter');
  }

}

export default Counter;
