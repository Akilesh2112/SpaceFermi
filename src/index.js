import Phaser from 'phaser';
import './style.css';
import Options from './scenes/card';
import { calculator, householdObject, planets } from './calculator';

var config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    scene: Options,
    backgroundColor: 0x33333
};


var game = new Phaser.Game(config);