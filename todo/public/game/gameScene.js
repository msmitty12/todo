class GameScene extends Phaser.Scene {

	constructor(game, game_width, game_height) {
		super({key : 'game'});
		this.game = game;
		this.good_team_members = ["mksmith", "sadams2", "dcrews", "mgcarroll", "stho"];
		this.platforms = null;
		this.player = null;
		this.stars;
		this.stuart;
		this.goodTeam;
		this.goodMember;
		this.timeText;
		this.scoreText;
		this.story_point_options = [1, 2, 3, 5, 8, 13];
		this.game_width = game_width;
		this.game_height = game_height;
		this.cursors;
		this.score = 0;
		this.game_time;
		this.sprint_num;
	}

	init(data){
        this.game_time = data.game_time;
        this.sprint_num = data.sprint_num;
        this.total_score = data.total_score;
        this.score = 0;
        this.incomplete_sprints = data.incomplete_sprints;
    }

	preload() {
	    this.load.image('sky', 'assets/sky.png');
	    this.load.image('ground', 'assets/platform.png');
	    this.load.image('jira', 'assets/jira.png');
	    this.load.image('bomb', 'assets/bomb.png');
	    this.load.image('stuart', 'assets/stuart.png');
	    this.load.image('good', 'assets/good.jpg');
	    this.good_team_members.forEach(member => {
	        this.load.image(member, 'assets/' + member + '.jpg')
	    });
	    
	    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
	}

	create() {
	    //  A simple background for our game
	    this.add.image(400, 300, 'sky');

	    //  The platforms group contains the ground and the 2 ledges we can jump on
	    this.platforms = this.physics.add.staticGroup();

	    //  Here we create the ground.
	    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
	    this.platforms.create(200, 568, 'ground').setScale(2).refreshBody();

	    // The this.player and its settings
	    this.player = this.physics.add.sprite(100, 100, 'good');
	    this.stuart = this.physics.add.sprite(400, 50, 'stuart');
	    this.stuart.setVelocityX(200);
	    this.goodTeam = this.physics.add.group();
	    this.good_team_members.forEach(member => {
	        let goodMember = this.goodTeam.create(Math.random() * (this.game_width - 60) + 60, this.game_height - 140, member);
	        goodMember.setData({"working": false, "totalTime": 0, "timeElapsed": 0, "loadingScreen": null});
	        goodMember.setVelocityX(this.getGoodMemberVelocity());
	    });
	    this.stuart.setAccelerationY(-300);

	    //  Player physics properties. Give the little guy a slight bounce.
	    this.player.setBounce(0.2);
	    this.player.setCollideWorldBounds(true);
	    this.player.setMaxVelocity(450, 450);
	    this.player.body.useDamping = true;
	    this.player.setDragX(.9)

	    //  Input Events
	    this.cursors = this.input.keyboard.createCursorKeys();
	    this.wKey = this.input.keyboard.addKey('W'); 
	    this.aKey = this.input.keyboard.addKey('A'); 
	    this.sKey = this.input.keyboard.addKey('S'); 
	    this.dKey = this.input.keyboard.addKey('D'); 

	    //  Some stars to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
	    this.stars = this.physics.add.group();


	    //  The score
	    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '12px', fill: '#000' });
	    this.timeText = this.add.text(100, 16, 'time: ' + this.game_time, { fontSize: '12px', fill: '#000' });

	    //  Collide the this.player and the stars with the platforms
	    this.physics.add.collider(this.player, this.platforms);
	    this.physics.add.collider(this.stars, this.platforms);
	    this.physics.add.collider(this.goodTeam, this.platforms);

	    let temp_physics = this.physics

	    let this_scene = this
	    //  Checks to see if the this.player overlaps with any of the stars, if he does call the collectStar function
	    this.goodTeam.children.iterate(function (child) {
	        temp_physics.add.overlap(child, this_scene.stars, this_scene.collectStar, () => {return !child.getData("working")}, this_scene);
	    });

	    this.physics.add.overlap(this.player, this.stars, this.playerHitStar, null, this);

	    this.game_timer = this.time.addEvent({ delay: 1000, loop: true, callback: () => {this.tick()} });
	}

	update() {

	    if (Math.random() > .99) {
	        var new_star = this.stars.create(this.stuart.body.x, this.stuart.body.y, 'jira')
	        var story_points = this.story_point_options[Math.floor(Math.random() * this.story_point_options.length)]
	        new_star.setData("storyPoints", story_points)
	        var story_points_text = this.add.text(16, 16, story_points, { fontSize: '20px', fontWeight: '900', fill: '#000'});
	        story_points_text.setOrigin(0.5,0.5);
	        new_star.setData("storyPointText", story_points_text)
	    }

	    this.stars.children.iterate(function (star) {
	        var point_text = star.getData("storyPointText")
	        point_text.y = star.y - 15;
	        point_text.x = star.x;
	    });

	    this.updateGoodTeam()

	    this.updateStuart()

	    this.updatePlayer()

	}


	end() {
		
	}

	getGoodMemberVelocity() {
	    var multiplier = Math.random() < 0.5 ? -1 : 1
	    return (60 + 30 * Math.random()) * multiplier
	}

	updateStuart() {
	    if (this.stuart.body.x < 50) {
	        this.stuart.setVelocityX(200);
	    }
	    else if (this.stuart.body.x > 550) {
	        this.stuart.setVelocityX(-200);
	    }
	}

	updatePlayer() {
	    if (this.cursors.left.isDown || this.aKey.isDown)
	    {
	        this.player.setAccelerationX(-900);
	    }
	    else if (this.cursors.right.isDown || this.dKey.isDown)
	    {
	        this.player.setAccelerationX(900);
	    }
	    else {
	        this.player.setAccelerationX(0);
	    }

	    if (this.cursors.up.isDown || this.wKey.isDown)
	    {
	        this.player.setAccelerationY(-900)
	    }
	    else if (this.cursors.down.isDown || this.sKey.isDown)
	    {
	        this.player.setAccelerationY(900)
	    }
	    else
	    {
	        this.player.setAccelerationY(0)
	    }
	}

	updateGoodTeam() {
		let this_scene = this;
	    this.goodTeam.children.iterate(function (child) {
	        if (child.getData("working")) {
	            child.setVelocityX(0);

	            let totalTime = child.getData("totalTime")
	            let timeElapsed = child.getData("timeElapsed")
	            child.setData("timeElapsed", timeElapsed + 1)

	            var loading_screen = child.getData("loadingScreen")
	            var progress_bar = child.getData("progressBar")
	            progress_bar.setSize((timeElapsed / totalTime) * loading_screen.width, 10);

	            if (totalTime - timeElapsed < 1) {
	                if (child.x < this_scene.game_width / 2) {
	                    child.setVelocityX(this_scene.getGoodMemberVelocity());
	                } else {
	                    child.setVelocityX(this_scene.getGoodMemberVelocity() * -1);
	                }

	                child.setData("working", false);
	                child.setData("timeElapsed", 0);
	                child.setData("totalTime", 0);
	                loading_screen.destroy();
	                progress_bar.destroy();
	                child.setData("loadingScreen", null)
	                child.setData("progressBar", null)

	                //  Add and update the score
	                this_scene.score += totalTime / 100;
	                this_scene.scoreText.setText('Score: ' + this_scene.score);
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

	collectStar (child, star)
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
	        var loading_screen = this.add.rectangle(x_pos - 10,y_pos - 40, 30, 10, 0xff0000);
	        var progress_bar = this.add.rectangle(x_pos - 10,y_pos - 40, 0, 10, 0x00ff00);
	        loading_screen.setOrigin(0,0);
	        progress_bar.setDepth(999);
	        progress_bar.setOrigin(0,0);

	        child.setData("loadingScreen", loading_screen)
	        child.setData("progressBar", progress_bar)
	    }
	}

	playerHitStar (player, star) {
	    star.setVelocity(800, -300);
	}

	tick () {
		this.game_time -= 1
		this.timeText.setText('Time: ' + this.game_time);

		if (this.game_time == 0) {
			var ticket_in_progress = false
			this.goodTeam.children.iterate(function (child) {
				ticket_in_progress = ticket_in_progress || child.getData("working")
			});

			if (ticket_in_progress) {
				this.incomplete_sprints += 1
			}
			this.scene.start("title", {score: this.total_score + this.score, incomplete_sprints: this.incomplete_sprints, sprint_num: this.sprint_num + 1});
		}
	}

}

export default GameScene;
