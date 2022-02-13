import Phaser from 'phaser';
// import './style.css';
import Counter from './scenes/counter';
import { calculator, householdObject, planets } from './calculator';

const config = {
  type: Phaser.AUTO,
  // width: 1200,
  // height: 500,
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
  // zoom: 2,
  // resolution: window.devicePixelRatio,
  // we set the canvas for phaser in a specific div
  // parent: 'phaser',
  transparent: true,
  scene: {
    // Counter,
    create: create,
  },
};

function create() {
  this.add.text(0, 0, 'Hello World', { font: '"Press Start 2P"' });
}

const game = new Phaser.Game(config);
