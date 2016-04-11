// Level3 SCENE
module scenes {
    export class Level3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _desert: objects.Desert;
        private _level1ScoreBox: createjs.Bitmap;
        private _level1LivesBox: createjs.Bitmap;
        private _clockBox: createjs.Bitmap;
        private _carCount: number;
        private _player: objects.Player;
        private _collision3: managers.Collision3;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _cars: objects.BurningWheel[];
        private _cars2: objects.BurningWheel2[];
        private cactus: objects.Cactus[];
        private _camel: objects.Camel[];
        private _timeLapsed: number;
        private _timeRemaining: number;
        private _timeLabel: objects.Label;
        private _water: objects.Water;
        private _cactus: objects.Cactus;
        

        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method ++++++++++++++++++++++++++++++++++++++
        public start(): void {
            // Set initial values
            this._carCount = 1;
            // We do not set the livesValue and scoreValue again for Level3
            // livesValue = 5;
            // scoreValue = 0;
            this._timeLapsed = 0;
            this._timeRemaining = 10;
            
            // added desert to the scene
            this._desert = new objects.Desert();
            this.addChild(this._desert);
            
            // added gas tank to the scene
           this._water = new objects.Water();
           this.addChild(this._water);
           
           // added camel to the scene
          // this._camel = new objects.Camel();
          // this.addChild(this._camel);
           
           // added camel to the scene
           this._cactus = new objects.Cactus();
           this.addChild(this._cactus);
            
            // Add red cars
            this._cars = new Array<objects.BurningWheel>();
            for (var car: number = 0; car < this._carCount; car++) {
                this._cars[car] = new objects.BurningWheel();
                this.addChild(this._cars[car]);
            }
            
            // Add blue cars
            this._cars2 = new Array<objects.BurningWheel2>();
            for (var car: number = 0; car < this._carCount; car++) {
                this._cars2[car] = new objects.BurningWheel2();
                this.addChild(this._cars2[car]);
            }
            
            // Add green cars
            this.cactus = new Array<objects.Cactus>();
            for (var car: number = 0; car < this._carCount; car++) {
                this.cactus[car] = new objects.Cactus();
                this.addChild(this.cactus[car]);
            }
            
            // Add yellow cars
            this._camel = new Array<objects.Camel>();
            for (var car: number = 0; car < this._carCount; car++) {
                this._camel[car] = new objects.Camel();
                this.addChild(this._camel[car]);
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
            this._level1LivesBox = new objects.Button("level1LivesBox", 483, 323, false);
            this.addChild(this._level1LivesBox);
            
            // Add _scoreLabel
            this._scoreLabel = new objects.Label(
                "Score: " + scoreValue,
                "14px Consolas",
                "#000000",
                600, 70, false);
            this._scoreLabel.textAlign = "right";
            this.addChild(this._scoreLabel);
            
            // Add _timeLabel
            this._timeLabel = new objects.Label(
                "" + this._timeRemaining,
                "30px Consolas",
                "#000000",
                570, 225, false);
            this._timeLabel.textAlign = "right";
            this.addChild(this._timeLabel);
            
            // Add _livesLabel
            this._livesLabel = new objects.Label(
                "Lives: " + livesValue,
                "14px Consolas",
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
            
            // Constantly update desert, water and player
            this._desert.update();
            this._water.update();
            this._cactus.update();
            this._player.update();
           
            // Update red car
            this._cars.forEach(car => {
                car.update();
                this._collision3.check(car);
            });
            
            // Update blue car
            this._cars2.forEach(car2 => {
                car2.update();
                this._collision3.check(car2);
            });
            
            // Update cactus
            this.cactus.forEach(cactus => {
                cactus.update();
                this._collision3.check(cactus);
            });
            
            // Update camel
            this._camel.forEach(camel => {
                camel.update();
                this._collision3.check(camel);
            });

            this._collision3.check(this._water);

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