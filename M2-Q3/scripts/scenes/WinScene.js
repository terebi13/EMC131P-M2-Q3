export default class WinScene extends Phaser.Scene{

    constructor(){
       super("WinScene");
    }

    // init (data) { // get data score from gamescene

    //     console.log('init', data);
    //     this.finalScore = data.score;
    // }

    preload () {
        this.load.image('background', "../assets/images/bg.png");
        this.load.image('winbackground', "../assets/images/win.png");
        this.load.image('done', "../assets/images/done.png");
    }

    create () {
        this.add.image(500,310, 'background').setScale(1.0);
        this.add.image(500, 300, 'startbackground').setScale(1.0);

        let doneImage = this.add.image(40,370, 'done').setScale(.6);
        doneImage.setInteractive({ useHandCursor: true });
        doneImage.on('pointerdown', () => this.mainButton());


    }

    doneButton () {
        this.scene.start("MainMenuScene");
    }
    
}