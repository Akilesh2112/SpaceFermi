class Options extends Phaser.Scene {
    constructor() {
        super({
            key: "options"
        });
    }

    preload() {
        this.load.plugin(
            "rexperspectiveimageplugin",
            "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexperspectiveimageplugin.min.js",
            true);
    }

    create() {
        var faces = [];
        for (var i = 0; i < 10; i++) {
            if (window.CP.shouldStopExecution(0)) break;
            faces.push(CreateCard(this, GetCardName()));
        }
        window.CP.exitedLoop(0);
        var carousel = this.add.rexPerspectiveCarousel({
            x: 400,
            y: 300,

            faces: faces,
            faceSpace: 60
        });


        carousel.
        setInteractive().
        on("pointerdown", function(pointer, localX, localY, event) {
            if (localX <= carousel.width / 2) {
                carousel.roll.toNext();
            } else {
                carousel.roll.toPrevious();
            }
        });

        this.add.
        graphics({
            lineStyle: {
                width: 3,
                color: 0xff0000,
                alpha: 1
            }
        }).


        strokeRect(
            400 - carousel.width / 2,
            300 - carousel.height / 2,
            carousel.width,
            carousel.height).

        setDepth(1);

        this.add.text(0, 580, "Click left/right side of red-box");
    }

    update() {}
}


const RandInt = Phaser.Math.Between;
const Pad = Phaser.Utils.String.Pad;
var GetCardName = function(index) {
    if (index === undefined) {
        index = RandInt(0, 51);
    }
    return Pad(index.toString(), 3, "0", 1);
};

var CreateCard = function(scene, name) {
    return scene.add.rexPerspectiveCard({
        front: { key: "poker", frame: name },
        back: { key: "poker", frame: "back" },
        flip: false
    });

};

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