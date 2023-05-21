export default class MainMenuScene extends Phaser.Scene {

    constructor() {
        super("MainMenuScene");
    }

    preload() { 
        this.load.image('background', "../assets/images/bg.png");
        this.load.image('startbackground', "../assets/images/startbg.png");
        this.load.image('start', "../assets/images/start.png");
        this.load.image('exit', "../assets/images/exit.png");
        this.load.image('credits', "../assets/images/credits.png");
    }

    create() {

        this.add.image(500,310, 'background').setScale(1.0);
        this.add.image(500, 300, 'startbackground').setScale(1.0);
        
        let playImage = this.add.image(490,300, 'start').setScale(1.4);
        playImage.setInteractive({ useHandCursor: true });
        playImage.on('pointerdown', () => this.playButton());

        let creditsImage = this.add.image(930,370, 'credits').setScale(1);
        creditsImage.setInteractive({ useHandCursor: true });
        creditsImage.on('pointerdown', () => this.creditsButton());

        let quitImage = this.add.image(40,370, 'exit').setScale(.6);
        quitImage.setInteractive({ useHandCursor: true });
        quitImage.on('pointerdown', () => {if (confirm("Quit game?")) {window.close()}});

        
    }

    playButton() {
        this.scene.start("GameScene");
    }

    creditsButton() {
        this.scene.start("CreditScene");
    }

}