export default class GameScene extends Phaser.Scene{

    constructor() {
        super("GameScene");
    }

    init () {
        this.background;
        this.player;
        this.spikes;
        this.crabs;
        this.treasureChest;
        this.coins;
        this.tileset;

        this.cursors;
    }

    preload () {
        this.load.image('tiles', "../assets/tilemaps/sheet.png");
        this.load.tilemapTiledJSON('tilemap', "../assets/tilemaps/tilemap.tmj")

        this.load.image('spike', "../assets/images/spike.png");
        this.load.image('crab', "../assets/images/crab.png");
        this.load.image('treasure', "../assets/images/treasure.png");
        this.load.image('coin', "../assets/images/coin.png");
        
        this.load.spritesheet('player', '../assets/images/pirate.png', 
        {frameWidth:20, frameHeight:18});

    }

    create () {
        this.map = this.make.tilemap({ key: 'tilemap'});
        this.tileset = this.map.addTilesetImage('sheet', 'tiles');
        
        this.map.createLayer('ship', this.tileset, 0,60)

        this.platform = map.createStaticLayer('platform', this.tileset);
        this.platform.setCollisionByProperty({ collides: true });

        this.treasureChest = this.physics.add.staticGroup();
        this.treasureChest.create(50,200, 'treasure');
        
        // this.crab
        
        this.player = this.physics.add.sprite(60,250, 'player');
        player.setBounce(0);
        this.physics.add.collider(player,ground);


        this.spikes = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
        this.map.getObjectLayer('spike').objects.forEach((spike) => {
            spikeSprite = spikes.create(spike.x + 9, spike.y + 10 - spike.height, 'spike');
            spikeSprite.body.setSize(spike.width, spike.height - 10).setOffset(0,10);
            });
            this.physics.add.collider(this.player, this.spikes, this.spikeDmg, null, this);
            
    }

}