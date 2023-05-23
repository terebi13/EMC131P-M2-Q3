import MainMenuScene from './scenes/MainMenuScene.js';
import CreditsScene from './scenes/CreditsScene.js';
import GameScene from './scenes/GameScene.js'
import GameOverScene from './scenes/GameOverScene.js'
import WinningScene from './scenes/WinningScene.js'

let mainMenuScene = new MainMenuScene();
let creditsScene = new CreditsScene();
let gameScene = new GameScene();
let gameOverScene = new GameOverScene();
let winningScene = new WinningScene();

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 495,
    backgroundColor: "#D8FBFF",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 },
            debug: false
        }
    },  
};

let game = new Phaser.Game(config);

game.scene.add('MainMenuScene', mainMenuScene);
game.scene.add('CreditsScene', creditsScene)
game.scene.add('GameScene', gameScene);
game.scene.add('GameOverScene', gameOverScene);
game.scene.add('WinningScene', winningScene);

// Starting Scene
game.scene.start('MainMenuScene');
