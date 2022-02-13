export default class Options extends Phaser.Scene {
    listener

    constructor(listener) {
        super({ key: 'sliders' });
        this.listener = listener;
    }

    preload() {
        this.load.image('theme1', 'https://i.picsum.photos/id/788/200/200.jpg?hmac=ECykjkngzBhLGOjhU-UYPGXXjL8Ba8VPX3S_xid4T-k');
        this.load.image('theme2', 'https://i.picsum.photos/id/788/200/200.jpg?hmac=ECykjkngzBhLGOjhU-UYPGXXjL8Ba8VPX3S_xid4T-k');
        this.load.image('theme3', 'https://i.picsum.photos/id/788/200/200.jpg?hmac=ECykjkngzBhLGOjhU-UYPGXXjL8Ba8VPX3S_xid4T-k');
        this.load.image('theme4', 'https://i.picsum.photos/id/788/200/200.jpg?hmac=ECykjkngzBhLGOjhU-UYPGXXjL8Ba8VPX3S_xid4T-k');
        this.load.image('theme5', 'https://i.picsum.photos/id/788/200/200.jpg?hmac=ECykjkngzBhLGOjhU-UYPGXXjL8Ba8VPX3S_xid4T-k');
        this.load.image('theme6', 'https://i.picsum.photos/id/788/200/200.jpg?hmac=ECykjkngzBhLGOjhU-UYPGXXjL8Ba8VPX3S_xid4T-k');
    }

    create() {
        //array of all available themes
        let { width, height } = this.sys.game.canvas;

        var themes = [];
        themes.push(this.add.sprite(0, 0, 'theme1'));
        themes.push(this.add.sprite(0, 0, 'theme2'));
        themes.push(this.add.sprite(0, 0, 'theme3'));
        themes.push(this.add.sprite(0, 0, 'theme4'));
        themes.push(this.add.sprite(0, 0, 'theme5'));
        themes.push(this.add.sprite(0, 0, 'theme6'));
        console.log(themes);
        //number of themes
        var totalThemes = themes.length;

        //the selected theme
        var prime = 0;

        //initial position of themes on stage based on the selected theme 
        function setToPosition(prime) {
            themes[prime].x = width / 2;

            //check if there is another theme available to display on the right side; if yes then position it
            if (prime < (totalThemes - 1)) {
                themes[prime + 1].x = width / 2 + 67 + 75;
                themes[prime + 1].scale.setTo(0.5, 0.5);
            }

            //check if there is another theme available to display on the left side; if yes then position it
            if (prime > 0) {
                themes[prime - 1].x = width / 2 - 67 - 75;
                themes[prime - 1].scale.setTo(0.5, 0.5);
            }
        }

        //speed of moving animation
        var animationSpeed = 200;


        //click on theme listener 
        function clickListener(el) {
            console.log(themes.indexOf(el));
            var clickedPos = themes.indexOf(el);
            if (clickedPos > prime) {
                //move to left
                nextTheme();
            } else if (clickedPos < prime) {
                //move to right
                previousTheme();
            }
        }

        //initial setup; all items on the right side; anchor set to mid;
        themes.forEach(function(item) {
            item.x = width + 150;
            item.y = height / 2;
            item.inputEnabled = true;
            item.addListener(, clickListener, listener);
        })

        //set initial state
        setToPosition(prime);

        //predefined x positions for the 3 visible cards
        var xleft = width / 2 - 67 - 75;
        var xprime = width / 2;
        var xright = width / 2 + 67 + 75;

        //move to next theme
        function nextTheme() {
            //move prime left
            this.add.tween(themes[prime]).to({ x: xleft }, animationSpeed, null, true);
            this.add.tween(themes[prime].scale).to({ x: 0.5, y: 0.5 }, animationSpeed, null, true);
            //move right to prime
            if (prime < 5) {
                this.add.tween(themes[prime + 1]).to({ x: xprime }, animationSpeed, null, true);
                this.add.tween(themes[prime + 1].scale).to({ x: 1, y: 1 }, animationSpeed, null, true);
            }
            //move new to right
            if (prime < 4) {
                themes[prime + 2].x = width + 150;
                themes[prime + 2].scale.setTo(0.5, 0.5);
                this.add.tween(themes[prime + 2]).to({ x: xright }, animationSpeed, null, true);
            }
            //move left out
            if (prime > 0) {
                //themes[prime+1].x = -150;
                themes[prime - 1].scale.setTo(0.5, 0.5);
                this.add.tween(themes[prime - 1]).to({ x: -150 }, animationSpeed, null, true);
            }
            prime++;
        }

        //move to previous theme
        function previousTheme() {
            //move prime left
            this.add.tween(themes[prime]).to({ x: xright }, animationSpeed, null, true);
            this.add.tween(themes[prime].scale).to({ x: 0.5, y: 0.5 }, animationSpeed, null, true);
            //move left to prime
            if (prime > 0) {
                this.add.tween(themes[prime - 1]).to({ x: xprime }, animationSpeed, null, true);
                this.add.tween(themes[prime - 1].scale).to({ x: 1, y: 1 }, animationSpeed, null, true);
            }
            //move new to left
            if (prime > 1) {
                themes[prime - 2].x = -150;
                themes[prime - 2].scale.setTo(0.5, 0.5);
                this.add.tween(themes[prime - 2]).to({ x: xleft }, animationSpeed, null, true);
            }
            //move right out
            if (prime < (totalThemes - 1)) {
                //themes[prime+1].x = -150;
                themes[prime + 1].scale.setTo(0.5, 0.5);
                this.add.tween(themes[prime + 1]).to({ x: width + 150 }, animationSpeed, null, true);
            }
            prime--;
        }
    }

    update() {}

};