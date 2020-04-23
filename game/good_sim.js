//import GameScene from './gameScene.js';

// Our scenes
var gameScene = new Phaser.Scene("game");
var titleScene = new Phaser.Scene("title");

var player;
var stars;
var bombs;
var platforms;
var cursors;
var score = 0;
var gameOver = false;
var inSprint = true;
var scoreText;
var scene;
var stuart, goodTeam, goodMember, timeText;
var player;
var story_point_options = [1, 2, 3, 5, 8, 13]

var GAME_HEIGHT = 600;
var GAME_WIDTH = 600;

var good_team_members = ["mksmith", "sadams2", "dcrews", "mgcarroll", "stho"]

gameScene.preload = function ()
{
    scene = this;
    this.load.image('sky', 'assets/sky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('jira', 'assets/jira.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('stuart', 'assets/stuart.png');
    this.load.image('good', 'assets/good.jpg');
    good_team_members.forEach(member => {
        this.load.image(member, 'assets/' + member + '.jpg')
    });
    
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

gameScene.create = function ()
{
    //  A simple background for our game
    this.add.image(400, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(200, 568, 'ground').setScale(2).refreshBody();

    // The player and its settings
    player = this.physics.add.sprite(100, 100, 'good');
    stuart = this.physics.add.sprite(400, 50, 'stuart');
    stuart.setVelocityX(200);
    goodTeam = this.physics.add.group();
    good_team_members.forEach(member => {
        goodMember = goodTeam.create(Math.random() * (GAME_WIDTH - 60) + 60, GAME_HEIGHT - 140, member);
        goodMember.setData({"working": false, "totalTime": 0, "timeElapsed": 0, "loadingScreen": null});
        goodMember.setVelocityX(getGoodMemberVelocity());
    });
    stuart.setAccelerationY(-300);

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    player.setMaxVelocity(450, 450);
    player.body.useDamping = true;
    player.setDragX(.9)

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();

    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    stars = this.physics.add.group();

    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '12px', fill: '#000' });
    timeText = this.add.text(100, 16, 'time: 0', { fontSize: '12px', fill: '#000' });

    //  Collide the player and the stars with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(goodTeam, platforms);

    let temp_physics = this.physics
    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    goodTeam.children.iterate(function (child) {
        temp_physics.add.overlap(child, stars, collectStar, () => {return !child.getData("working")}, this);
    });

    this.physics.add.collider(player, bombs, hitBomb, null, this);
    this.physics.add.overlap(player, stars, playerHitStar, null, this);

    sprintCountdown(5);
}

gameScene.update = function ()
{
    if (gameOver)
    {
        return;
    }  

    if (!inSprint) {
        startSprint();
        return
    }

    if (Math.random() > .99) {
        var new_star = stars.create(stuart.body.x, stuart.body.y, 'jira')
        var story_points = story_point_options[Math.floor(Math.random() * story_point_options.length)]
        new_star.setData("storyPoints", story_points)
        var story_points_text = this.add.text(16, 16, story_points, { fontSize: '20px', fontWeight: '900', fill: '#000'});
        story_points_text.setOrigin(0.5,0.5);
        new_star.setData("storyPointText", story_points_text)
    }

    stars.children.iterate(function (star) {
        var point_text = star.getData("storyPointText")
        point_text.y = star.y - 15;
        point_text.x = star.x;
    });

    updateGoodTeam()

    updateStuart()

    updatePlayer()

}

titleScene.preload = function () {
    this.load.image('sky', 'assets/sky.png');
}

titleScene.create = function () {
    //  A simple background for our game
    this.add.image(400, 300, 'sky');

    var text = this.add.text(100, 100, 'Play the game!', { fontSize: '36px', color: '#FFF' });
    text.setInteractive().on('pointerup', () => {game.scene.switch('title', 'game');})
        .on('pointerover', () => {text.setStyle({ color: '#ff0'});})
        .on('pointerdown', () => {text.setStyle({ color: '#000'});})
        .on('pointerout', () => {text.setStyle({ color: '#FFF'});})
    console.log(text)
    console.log("hi")
}

titleScene.update = function () {

}

var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

var game = new Phaser.Game(config);

// Add both scenes (it does not start them)
game.scene.add('title', titleScene);
game.scene.add("game", gameScene);

// Start the title scene
game.scene.start('title');

function getGoodMemberVelocity() {
    var multiplier = Math.random() < 0.5 ? -1 : 1
    return (60 + 30 * Math.random()) * multiplier
}


function updateStuart() {
    if (stuart.body.x < 50) {
        stuart.setVelocityX(200);
    }
    else if (stuart.body.x > 550) {
        stuart.setVelocityX(-200);
    }
}

function updatePlayer() {
    if (cursors.left.isDown)
    {
        player.setAccelerationX(-900);
    }
    else if (cursors.right.isDown)
    {
        player.setAccelerationX(900);
    }
    else {
        player.setAccelerationX(0);
    }

    if (cursors.up.isDown)
    {
        player.setAccelerationY(-900)
    }
    else if (cursors.down.isDown)
    {
        player.setAccelerationY(900)
    }
    else
    {
        player.setAccelerationY(0)
    }
}

function updateGoodTeam() {
    goodTeam.children.iterate(function (child) {
        if (child.getData("working")) {
            child.setVelocityX(0);

            let totalTime = child.getData("totalTime")
            let timeElapsed = child.getData("timeElapsed")
            child.setData("timeElapsed", timeElapsed + 1)

            var loading_screen = child.getData("loadingScreen")
            var progress_bar = child.getData("progressBar")
            progress_bar.setSize((timeElapsed / totalTime) * loading_screen.width, 10);

            if (totalTime - timeElapsed < 1) {
                if (child.x < GAME_WIDTH / 2) {
                    child.setVelocityX(getGoodMemberVelocity());
                } else {
                    child.setVelocityX(getGoodMemberVelocity() * -1);
                }

                child.setData("working", false);
                child.setData("timeElapsed", 0);
                child.setData("totalTime", 0);
                loading_screen.destroy();
                progress_bar.destroy();
                child.setData("loadingScreen", null)
                child.setData("progressBar", null)

                //  Add and update the score
                score += totalTime / 100;
                scoreText.setText('Score: ' + score);
            }
        }
        else {
            if (child.body.x < 5)
            {
                child.setVelocityX(Math.abs(child.body.velocity.x));
            } else if (child.body.x > 550) {
                child.setVelocityX(-Math.abs(child.body.velocity.x));
            }
        }
    });

}

function startSprint() {
    inSprint = true;
    sprintCountdown(5);
    game.scene.switch('game', 'title');
}

function collectStar (child, star)
{
    var point_text = star.getData("storyPointText")
    var points = star.getData("storyPoints");
    point_text.destroy();
    star.disableBody(true, true);

    child.setData("working", true)

    child.setData("totalTime", child.getData("totalTime") + points * 100)

    if(!child.getData("loadingScreen")) {
        var y_pos = child.y
        var x_pos = child.x
        var loading_screen = scene.add.rectangle(x_pos - 10,y_pos - 40, 30, 10, 0xff0000);
        var progress_bar = scene.add.rectangle(x_pos - 10,y_pos - 40, 0, 10, 0x00ff00);
        loading_screen.setOrigin(0,0);
        progress_bar.setDepth(999);
        progress_bar.setOrigin(0,0);

        child.setData("loadingScreen", loading_screen)
        child.setData("progressBar", progress_bar)
    }

    /*
    var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

    var bomb = bombs.create(x, 16, 'bomb');
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;
    */

}

async function hitBomb (player, bomb)
{
    bomb.disableBody(true, true);

    player.setVelocity(0, 0);
    player.setTint(0xff0000);

    await new Promise(r => setTimeout(r, 2000));

    player.clearTint();
}

async function sprintCountdown(seconds) {
    while (seconds > 0) {
        timeText.setText('Time: ' + seconds + ' seconds');
        await new Promise(r => setTimeout(r, 1000));
        seconds -= 1;
    }
    inSprint = false;
}

function playerHitStar (player, star) {
    star.setVelocity(800, -300);
}
