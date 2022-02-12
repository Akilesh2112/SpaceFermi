import Phaser from 'phaser';
import AnalogCounter from '../components/analog-counter.ts';

class Counter extends Phaser.Scene {
  constructor() {
    super({ key: 'Counter' });
  }

  create() {
    const counter = new AnalogCounter(this, 400, 250, {
      // is 1000 the max value? 3000 doesnt change anything
      width: 200,
      height: 200,
      fontColor: '#ffffff',
      // it changes the padding but not the actual font size for digirs
      fontSize: 45,
      shade: 0,
      backgroundColor:
      // trying to go transparent doesnt work
            '#0000ffff',
      duration: 500,
    });

    counter.setOrigin(0.5);
    this.input.on('pointerdown', () => {
      counter.setNumber(Phaser.Math.Between(10, 999999));
    });
  }
}

export default Counter;
