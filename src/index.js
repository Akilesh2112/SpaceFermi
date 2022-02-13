import Phaser from 'phaser';
import './style.css';
import Counter from './scenes/counter';
import { calculator, householdObject, planets } from './calculator';

var config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: Demo,
    backgroundColor: 0x33333
};


var game = new Phaser.Game(config);