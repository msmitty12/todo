import GameScene from './gameScene.js';

var cursors;
var inSprint = true;
var scene;

var GAME_HEIGHT = 600;
var GAME_WIDTH = 600;
var GAME_TIME = 20;

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

// Our scenes
var gameScene = new GameScene(game, GAME_WIDTH, GAME_HEIGHT);
var titleScene = new Phaser.Scene("title");


titleScene.init = function (data) {
    this.score = data.score
    this.sprint_num = data.sprint_num
}

titleScene.preload = function () {
    this.load.image('sky', 'assets/sky.png');
}

titleScene.create = function () {
    //  A simple background for our game
    this.add.image(400, 300, 'sky');

    var title = this.add.text(100, 50, 'Good Team Simulator', { fontSize: '36px', color: 'yellow' });
    this.add.text(50, 100, "Fly around and deflect Stuart's Jira's", { fontSize: '20px', color: 'yellow' });
    this.add.text(50, 150, "Don't leave any work unfinished when the\n sprint ends!", { fontSize: '20px', color: 'yellow' });
    this.add.text(50, 220, "Total points completed: " + this.score, { fontSize: '20px', color: 'green' });
    var text = this.add.text(100, 400, 'Start Sprint ' + this.sprint_num + ' of 5', { fontSize: '36px', color: '#FFF' });
    text.setInteractive().on('pointerup', () => {game.scene.start('game', {game_time: GAME_TIME, sprint_num: this.sprint_num, total_score: this.score});})
        .on('pointerover', () => {text.setStyle({ color: '#ff0'});})
        .on('pointerdown', () => {text.setStyle({ color: '#000'});})
        .on('pointerout', () => {text.setStyle({ color: '#FFF'});})
}

titleScene.update = function () {

}

// Add both scenes (it does not start them)
game.scene.add('title', titleScene);
game.scene.add("game", gameScene);

// Start the title scene
game.scene.start('title', {score: 0, sprint_num: 1});


