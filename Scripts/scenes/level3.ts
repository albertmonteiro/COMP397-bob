// Level3 SCENE
module scenes {
    export class Level3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _desert: objects.Desert;
        private _level1ScoreBox: createjs.Bitmap;
        private _level1LivesBox: createjs.Bitmap;
        private _level3Box: createjs.Bitmap;
        private _clockBox: createjs.Bitmap;
        private _tornadoCount: number;
        private _player: objects.Player;
        private _collision3: managers.Collision3;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;

        private _timeLapsed: number;
        private _timeRemaining: number;
        private _timeLabel: objects.Label;

        private _camel: objects.Camel;
        private _water: objects.Water;
        private _cactus: objects.Cactus;
        private _snake: objects.Snake;
        private _scorpian: objects.Scorpian;
        private _tornado: objects.Tornado[];



        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method ++++++++++++++++++++++++++++++++++++++
        public start(): void {
            // Set initial values
            this._tornadoCount = 1;
            // We do not set the livesValue and scoreValue again for Level3
            // livesValue = 5;
            // scoreValue = 0;
            this._timeLapsed = 0;
            this._timeRemaining = 10;

            // added desert to the scene
            this._desert = new objects.Desert();
            this.addChild(this._desert);

            // added water tank to the scene
            this._water = new objects.Water();
            this.addChild(this._water);

            // added cactus to the scene
            this._cactus = new objects.Cactus();
            this.addChild(this._cactus);

            // added snake to the scene
            this._snake = new objects.Snake();
            this.addChild(this._snake);

            // added scorpian to the scene
            this._scorpian = new objects.Scorpian();
            this.addChild(this._scorpian);

            // added camel to the scene
            this._camel = new objects.Camel();
            this.addChild(this._camel);

            // Added Tornado
            this._tornado = new Array<objects.Tornado>();
            for (var tornado: number = 0; tornado < this._tornadoCount; tornado++) {
                this._tornado[tornado] = new objects.Tornado();
                this.addChild(this._tornado[tornado]);
            }

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            // add the level3ScoreBox the scene
            this._level1ScoreBox = new objects.Button("level3Box", 500, 35, false);
            this.addChild(this._level1ScoreBox);

            // add the level1TImerBox the scene
            this._clockBox = new objects.Button("level1TImerBox", 530, 210, false);
            this.addChild(this._clockBox);

            // add the level3LivesBox the scene
            this._level1LivesBox = new objects.Button("level3Box", 500, 355, false);
            this.addChild(this._level1LivesBox);

            // Add _scoreLabel
            this._scoreLabel = new objects.Label(
                "Score: " + scoreValue,
                "14px Algerian",
                "#000000",
                600, 70, false);
            this._scoreLabel.textAlign = "right";
            this.addChild(this._scoreLabel);

            // Add _timeLabel
            this._timeLabel = new objects.Label(
                "" + this._timeRemaining,
                "30px Algerian",
                "#000000",
                570, 225, false);
            this._timeLabel.textAlign = "right";
            this.addChild(this._timeLabel);

            // Add _livesLabel
            this._livesLabel = new objects.Label(
                "Lives: " + livesValue,
                "14px Algerian",
                "#000000",
                585, 390, false);
            this._livesLabel.textAlign = "right";
            this.addChild(this._livesLabel);

            // added collision3 manager to the scene
            this._collision3 = new managers.Collision3(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here ++++++++++++++++++++++++++++++++++++++
        public update(): void {

            this._timeLapsed++;
            if (this._timeLapsed % 100 == 0) {
                if (this._timeRemaining <= 1) {
                    // turn off player engine
                    this._player.level1BackgroundMusic.stop();
                    // Switch to WIN scene
                    scene = config.Scene.WIN;
                    changeScene();
                }
                this._timeRemaining--;
            }
            
              // Update red car
            this._tornado.forEach(tornado => {
                tornado.update();
                this._collision3.check(tornado);
            });

            // Constantly update desert, water and player
            this._desert.update();
            this._water.update();
            this._cactus.update();
            this._player.update();
            this._snake.update();
            this._scorpian.update();
            this._camel.update();
            

            this._collision3.check(this._water);
            this._collision3.check(this._camel);
            this._collision3.check(this._cactus);
            this._collision3.check(this._snake);
            this._collision3.check(this._scorpian);
            

            
            this._updateScore();
        }

        /**
         * @method _updateScore
         * @return void
         */
        private _updateScore(): void {
            this._scoreLabel.text = "Score: " + scoreValue;
            this._timeLabel.text = "" + this._timeRemaining;
            this._livesLabel.text = "Lives: " + livesValue;
        }


    }
}