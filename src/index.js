import Phaser from 'phaser';
import './style.css';

import { calculator, householdObject, planets } from './calculator';

function preload() {
  this.load.setBaseURL('http://labs.phaser.io');

  this.load.image('sky', 'assets/skies/space3.png');
  this.load.image('logo', 'assets/sprites/phaser3-logo.png');
  this.load.image('red', 'assets/particles/red.png');
}

function create() {
  this.add.image(400, 300, 'sky');

  const particles = this.add.particles('red');

  const emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD',
  });

  const logo = this.physics.add.image(400, 100, 'logo');

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}

const config = {
  type: Phaser.AUTO,
  scale: {
    width: 400,
    height: 400,
    // makes the canvas fit the screen
    // mode: Phaser.Scale.ScaleModes.FIT,
    // makes the canvas stay in the center
    // autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
  parent: 'bucket',
  transparent: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload,
    create,
  },
};

const game = new Phaser.Game(config);
