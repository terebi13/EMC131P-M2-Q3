export default class CreditScene extends Phaser.Scene{

    constructor() {
        super("CreditScene")
    }

    preload() {

        this.load.image('creditsbackground', "../assets/images/creditsbg.png");
        this.load.image('back', "../assets/images/back.png");
    }

    create() {

        this.add.image(500,310, 'creditsbackground');

        let backImage = this.add.image(50,50, 'back').setScale(1);
        backImage.setInteractive({ useHandCursor: true });
        backImage.on('pointerdown', () => this.backButton());
    }
    backButton() {

        this.scene.start("MainMenuScene")
    }

}