// Level2 SCENE
module scenes {
    export class Level2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _level2Road: objects.Level2Road;
        private _level1ScoreBox: createjs.Bitmap;
        private _level1LivesBox: createjs.Bitmap;
        private _clockBox: createjs.Bitmap;
        private _wheel: objects.Wheel;
        private _enemyCount: number;
        private _player: objects.Player;
        private _collision2: managers.Collision2;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _burningWheels: objects.BurningWheel[];
        private _burningWheels2: objects.BurningWheel2[];
        private _burningWheels3: objects.BurningWheel3[];
        private _burningWheels4: objects.BurningWheel4[];
        private _timeLapsed: number;
        private _timeRemaining: number;
        private _timeLabel: objects.Label;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method ++++++++++++++++++++++++++++++++++++++
        public start(): void {
            // Set initial values
            this._enemyCount = 1;
            // We do not set the livesValue and scoreValue again for Level2
            // livesValue = 5;
            // scoreValue = 0;
            this._timeLapsed = 0;
            this._timeRemaining = 10;
            
            // added road to the scene
            this._level2Road = new objects.Level2Road();
            this.addChild(this._level2Road);
            
            // added gas tank to the scene
            this._wheel = new objects.Wheel();
            this.addChild(this._wheel);
            
            // Add Burning Wheel
            this._burningWheels = new Array<objects.BurningWheel>();
            for (var wheel: number = 0; wheel < this._enemyCount; wheel++) {
                this._burningWheels[wheel] = new objects.BurningWheel();
                this.addChild(this._burningWheels[wheel]);
            }
            
            // Add Burning Wheel
            this._burningWheels2 = new Array<objects.BurningWheel2>();
            for (var wheel: number = 0; wheel < this._enemyCount; wheel++) {
                this._burningWheels2[wheel] = new objects.BurningWheel2();
                this.addChild(this._burningWheels2[wheel]);
            }
            
            // Add Burning Wheel
            this._burningWheels3 = new Array<objects.BurningWheel3>();
            for (var wheel: number = 0; wheel < this._enemyCount; wheel++) {
                this._burningWheels3[wheel] = new objects.BurningWheel3();
                this.addChild(this._burningWheels3[wheel]);
            }
            
            // Add Burning Wheel
            this._burningWheels4 = new Array<objects.BurningWheel4>();
            for (var wheel: number = 0; wheel < this._enemyCount; wheel++) {
                this._burningWheels4[wheel] = new objects.BurningWheel4();
                this.addChild(this._burningWheels4[wheel]);
            }
            
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            // add the level1ScoreBox the scene
            this._level1ScoreBox = new objects.Button("level1ScoreBox", 484, 5, false);
            this.addChild(this._level1ScoreBox);
            
            // add the level1TImerBox the scene
            this._clockBox = new objects.Button("level1TImerBox", 530, 210, false);
            this.addChild(this._clockBox);
            
            // add the level1LivesBox the scene
            this._level1LivesBox = new objects.Button("level1ScoreBox", 483, 375, false);
            this.addChild(this._level1LivesBox);
            
            // Add _scoreLabel
            this._scoreLabel = new objects.Label(
                "Score: " + scoreValue,
                "14px Algerian",
                "#000000",
                575, 48, false);
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
                560, 418, false);
            this._livesLabel.textAlign = "right";
            this.addChild(this._livesLabel);
            
            // added collision2 manager to the scene
            this._collision2 = new managers.Collision2(this._player);
            
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
                    // Switch to next level
                    scene = config.Scene.INSTRUCTION3;
                    changeScene();
                }
                this._timeRemaining--;
            }
            
            // Constantly update road, gastank and player
            this._level2Road.update();
            this._wheel.update();
            this._player.update();
           
            // Update red car
            this._burningWheels.forEach(burningWheel => {
                burningWheel.update();
                this._collision2.check(burningWheel);
            });
            
            // Update blue car
            this._burningWheels2.forEach(burningWheel2 => {
                burningWheel2.update();
                this._collision2.check(burningWheel2);
            });
            
            // Update green car
            this._burningWheels3.forEach(burningWheel3 => {
                burningWheel3.update();
                this._collision2.check(burningWheel3);
            });
            
            // Update yellow car
            this._burningWheels4.forEach(burningWheel4 => {
                burningWheel4.update();
                this._collision2.check(burningWheel4);
            });

            this._collision2.check(this._wheel);

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