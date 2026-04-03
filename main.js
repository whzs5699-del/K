import Phaser from 'phaser';
import { MenuScene } from './scenes/MenuScene.js';
import { PlayerSetupScene } from './scenes/PlayerSetupScene.js';
import { GameScene } from './scenes/GameScene.js';

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: '100%',
        height: '100%',
    },
    scene: [MenuScene, PlayerSetupScene, GameScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
        },
    },
    backgroundColor: '#000000',
};

new Phaser.Game(config);
