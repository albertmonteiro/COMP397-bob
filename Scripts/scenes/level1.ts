// Level1 SCENE
module scenes {
    export class Level1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _road: objects.Road;
        private _level1ScoreBox: createjs.Bitmap;
        private _level1LivesBox: createjs.Bitmap;
        private _clockBox: createjs.Bitmap;
        private _gas: objects.Gas;
        private _carCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _cars: objects.Car[];
        private _cars2: objects.Car2[];
        private _cars3: objects.Car3[];
        private _cars4: objects.Car4[];
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
            this._carCount = 1;
            livesValue = 5;
            scoreValue = 0;
            this._timeLapsed = 0;
            this._timeRemaining = 10;
            
            // added road to the scene
            this._road = new objects.Road();
            this.addChild(this._road);
            
            // added gas tank to the scene
            this._gas = new objects.Gas();
            this.addChild(this._gas);
            
            // Add red cars
            this._cars = new Array<objects.Car>();
            for (var car: number = 0; car < this._carCount; car++) {
                this._cars[car] = new objects.Car();
                this.addChild(this._cars[car]);
            }
            
            // Add blue cars
            this._cars2 = new Array<objects.Car2>();
            for (var car: number = 0; car < this._carCount; car++) {
                this._cars2[car] = new objects.Car2();
                this.addChild(this._cars2[car]);
            }
            
            // Add green cars
            this._cars3 = new Array<objects.Car3>();
            for (var car: number = 0; car < this._carCount; car++) {
                this._cars3[car] = new objects.Car3();
                this.addChild(this._cars3[car]);
            }
            
            // Add yellow cars
            this._cars4 = new Array<objects.Car4>();
            for (var car: number = 0; car < this._carCount; car++) {
                this._cars4[car] = new objects.Car4();
                this.addChild(this._cars4[car]);
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
                "14px Algerian",
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
                "14px Algerian",
                "#000000",
                585, 390, false);
            this._livesLabel.textAlign = "right";
            this.addChild(this._livesLabel);
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
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
                    scene = config.Scene.INSTRUCTION2;
                    changeScene();
                }
                this._timeRemaining--;
            }
            
            // Constantly update road, gastank and player
            this._road.update();
            this._gas.update();
            this._player.update();
           
            // Update red car
            this._cars.forEach(car => {
                car.update();
                this._collision.check(car);
            });
            
            // Update blue car
            this._cars2.forEach(car2 => {
                car2.update();
                this._collision.check(car2);
            });
            
            // Update green car
            this._cars3.forEach(car3 => {
                car3.update();
                this._collision.check(car3);
            });
            
            // Update yellow car
            this._cars4.forEach(car4 => {
                car4.update();
                this._collision.check(car4);
            });

            this._collision.check(this._gas);

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