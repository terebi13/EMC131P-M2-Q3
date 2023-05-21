export default class OverScene extends Phaser.Scene{

    constructor(){
       super("OverScene");
    }

    // init (data) { // get data score from gamescene

    //     console.log('init', data);
    //     this.finalScore = data.score;
        
    //  }

    preload () {
        this.load.image('background', "../assets/images/bg.png");
        this.load.image('losebackground', "../assets/images/lsoebg.png");
        this.load.image('done', "../assets/images/done.png");
        this.load.image('tryAgain', "../assets/images/tryagain.png");

    }

    create () {
        this.add.image(500,310, 'background').setScale(1.0);
        this.add.image(500, 300, 'losebackground').setScale(1.0);

        let replayImage = this.add.image(490,300, 'tryAgain').setScale(.6);
        replayImage.setInteractive({ useHandCursor: true });
        replayImage.on('pointerdown', () => this.mainButton());

        let doneImage = this.add.image(40,370, 'done').setScale(.6);
        doneImage.setInteractive({ useHandCursor: true });
        doneImage.on('pointerdown', () => this.mainButton());

    }

    replayButton() {
        this.scene.start("GameScene");
     }

    doneButton () {
        this.scene.start("MainMenuScene");
    }
}