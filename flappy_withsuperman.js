// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score
score = 0
score = score + 1;
var x
var y
var player;
/*
 * Loads all resources for the game and gives them names.
 */
function preload() {
    game.load.image("playerImg","assets/jamesBond.gif")
    game.load.image("playah","assets/flappy_superman.png")
    game.load.image("playarr","assets/csep.png")
    game.load.audio("score","assets/point.ogg")
    game.load.image("player","assets/flappy.png")
    game.load.image("pipe","assets/pipe.png")
}

/*
 * Initialises the game. This function is only called once.
 */
function create() {
    // set the background colour of the scene
    game.stage.setBackgroundColor("#A32900");

    //physics engine ARCADE
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.add.text(295, 0, // coordinates
        "The Bondiana", // text
        {
            font: "30px Lucida Console", // font size and typeface
            fill: "#FF0066"
        } // text colour
    )
    game.add.sprite(0, 370, "playerImg")
    game.add.sprite(765, 0, "playerImg")
    game.add.sprite(0, 0, "playerImg")
    game.add.sprite(765, 370, "playerImg")
    game.add.audio("score")

/*
    player = game.add.sprite(x,y,"player")
        player.x = 100;
        player.y = 200;
*/

    player=game.add.sprite(790/2, 400/2, "player");
    player.anchor.setTo(0.5,0.5);

    game.physics.arcade.enable(player);
    player.checkWorldBounds = true;

    player.body.velocity.y = -100;
    player.body.velocity.x= 100;
    player.body.gravity.y = 200;

    game.input.onDown.add(clickHandler)

    game.input.keyboard
        .addKey(Phaser.Keyboard.SPACEBAR)
        .onDown.add(spaceHandler)

    var rightkey = game.input.keyboard
        .addKey(Phaser.Keyboard.RIGHT)
        .onDown.add(moveRight);

    var leftkey = game.input.keyboard
        .addKey(Phaser.Keyboard.LEFT)
        .onDown.add(moveLeft);

    var upkey = game.input.keyboard
        .addKey(Phaser.Keyboard.UP)
        .onDown.add(moveUp);

    var downkey = game.input.keyboard
        .addKey(Phaser.Keyboard.DOWN)
        .onDown.add(moveDown);



for (var rep = 0; rep<=16; rep+=3) {

    var gap = Math.floor(Math.random()*6)+1;

    for (var count = 0; count < gap; count += 1) {

        game.add.sprite(50 * rep, 50 * count, "pipe")
    }
    for (var count = gap + 2; count <= 8; count++) {
        game.add.sprite(50 * rep, 50 * count, "pipe")
    }
}



}

function moveRight() {
    player.x+=10;
}

function moveLeft() {
    player.x-=10;
}

function moveDown() {
    player.y+=10;
}

function moveUp() {
    player.y-=10;
}

function clickHandler (event) {
    alert(score);
    score = score + 1;
}

function spaceHandler () {
    game.sound.play("score");
    game.add.sprite(Math.random()*790,Math.random()*400,"playah");
}


/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
    
}

