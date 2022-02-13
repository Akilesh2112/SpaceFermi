import Phaser, { Game } from 'phaser';
import './style.css';
import Counter from './scenes/counter';

const CANVAS_WIDTH = 250;
const CANVAS_HEIGHT = 300;

const config = {
  type: Phaser.AUTO,
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  transparent: true,
  scene: {
    preload,
    create,
    update,
    //Counter,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200,
      },
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('bucket', 'bucket.png');
  this.load.image('star', 'star.png');
}

async function create() {
  //const bucket = this.physics.add.staticImage(300, 300, 'bucket').setScale(0.1);
  const ITEM_KEY = 'star'; // TODO: make this connect with HTML
  const NUM_SPRITES = 100;
  const items = this.physics.add.group();
  items.enableBody = true;
  // this works but you need to introduce
  // sufficient chaos to separate the sprites
  this.physics.add.collider(items, items);

  function timer(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  for (let i = 0; i < NUM_SPRITES; i++) {
    const turtle = items.create(CANVAS_WIDTH / 2, 25, ITEM_KEY);
    turtle.body.collideWorldBounds = true;
    //turtle.body.checkCollision.up = false;

    // randomize initial velocity of each turtle
    turtle.setVelocityX(
      (-CANVAS_WIDTH / 2) * Math.random() + CANVAS_WIDTH / 10,
    );
    turtle.setVelocityY((-CANVAS_WIDTH / 5) * Math.random());

    turtle.body.bounce.setTo(0.9, 0.9);

    await timer(50);
  }
}

function update() {}
