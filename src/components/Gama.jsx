import Phaser from 'phaser';
import React from "react";


import bomb from '../assets/bomb.png';
import dude from '../assets/dude.png';
import platform from '../assets/platform.png';
import sky from '../assets/sky.png';
import star from '../assets/star.png';
import AnalogCounter from 'phaser3-analog-counter';

export default function Gama()
{

    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 300
                },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    const game = new Phaser.Game( config );

    var player;
    var platforms;
    var cursors;
    var stars;
    var score = 0;
    var scoreText;
    var bombs;
    var gameOver = false;
    
    
    function preload ()
    {
        this.load.image( 'sky', sky );
        this.load.image( 'ground', platform );
        this.load.image( 'star', star );
        this.load.image( 'bomb', bomb );
        this.load.spritesheet(
            'dude',
            dude, {
            frameWidth: 32,
            frameHeight: 48
        },
        );
    }
    
    
    
    //--------------------------------------------------------Add the components to the environment-----------------------------------
    function create ()
    {
        
        this.add.image( 0, 0, 'sky' ).setOrigin( 0, 0 ); //Phaser 3 all Game Objects are positioned based on their center by default
        //this.add.image( 400, 300, 'star' ); //If you put the star image first it will be covered-up by the sky image.
        
        platforms = this.physics.add.staticGroup();

        platforms.create( 400, 568, 'ground' ).setScale( 2 ).refreshBody();
        
        platforms.create( 600, 400, 'ground' );
        platforms.create( 50, 250, 'ground' );
        platforms.create( 750, 220, 'ground' );
        
        
        
        player = this.physics.add.sprite( 100, 450, 'dude' );

        player.setBounce( 0.2 );
        player.setCollideWorldBounds( true );
        //player.body.setGravityY( 300 )                          //to simulate the effects of gravity on a sprite
        this.physics.add.collider( player, platforms );         //allow the player to collide with the platforms we can create a Collider object

        this.anims.create( {
            key: 'left',
            frames: this.anims.generateFrameNumbers( 'dude', { start: 0, end: 3 } ),
            frameRate: 10,
            repeat: -1
        } );

        this.anims.create( {
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        } );

        this.anims.create( {
            key: 'right',
            frames: this.anims.generateFrameNumbers( 'dude', { start: 5, end: 8 } ),
            frameRate: 10,
            repeat: -1
        } );

        cursors = this.input.keyboard.createCursorKeys();                              //to create a keyboard input


        stars = this.physics.add.group( {
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        } );


        stars.children.iterate( function ( child )
        {
            child.setBounceY( Phaser.Math.FloatBetween( 0.4, 0.8 ) );
        } );

        bombs = this.physics.add.group();


        scoreText = this.add.text( 16, 16, 'score: 0', { fontSize: '32px', fill: '#000' } );          // score


        this.physics.add.collider( player, platforms );                               //To make the dummy and the ground touch
        this.physics.add.collider( stars, platforms );                                   //To make the stars and the ground touch
        this.physics.add.collider( bombs, platforms );

        this.physics.add.overlap( player, stars, collectStar, null, this );

        this.physics.add.collider( player, bombs, hitBomb, null, this );


    }


    //----------------------------------------------Make the game dynamic--------------------------------------------------------
    function update ()
    {

        if ( gameOver )
        {
            return;
        }
        if ( cursors.left.isDown )
        {
            player.setVelocityX( -160 );

            player.anims.play( 'left', true );
        }
        else if ( cursors.right.isDown )
        {
            player.setVelocityX( 160 );

            player.anims.play( 'right', true );
        }
        else
        {
            player.setVelocityX( 0 );

            player.anims.play( 'turn' );
        }

        if ( cursors.up.isDown && player.body.touching.down )
        {
            player.setVelocityY( -330 );
        }
    }




    function collectStar ( player, star )
    {
        star.disableBody( true, true );

        score += 10;
        scoreText.setText( 'Score: ' + score );

        if ( stars.countActive( true ) === 0 )
        {
            stars.children.iterate( function ( child )
            {

                child.enableBody( true, child.x, 0, true, true );

            } );

            var x = ( player.x < 400 ) ? Phaser.Math.Between( 400, 800 ) : Phaser.Math.Between( 0, 400 );

            var bomb = bombs.create( x, 16, 'bomb' );
            bomb.setBounce( 1 );
            bomb.setCollideWorldBounds( true );
            bomb.setVelocity( Phaser.Math.Between( -200, 200 ), 20 );

        }
    }

    function hitBomb ( player, bomb )
    {
        this.physics.pause();

        player.setTint( 0xff0000 );

        player.anims.play( 'turn' );

        gameOver = true;
    }



        return (
            <div style={ { textAlign: "center" } }>
                <h1>Hello World</h1>
            </div>
        );


}