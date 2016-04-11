var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Level3 SCENE
var scenes;
(function (scenes) {
    var Level3 = (function (_super) {
        __extends(Level3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method ++++++++++++++++++++++++++++++++++++++
        Level3.prototype.start = function () {
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
            this._cars = new Array();
            for (var car = 0; car < this._carCount; car++) {
                this._cars[car] = new objects.Car();
                this.addChild(this._cars[car]);
            }
            // Add blue cars
            this._cars2 = new Array();
            for (var car = 0; car < this._carCount; car++) {
                this._cars2[car] = new objects.Car2();
                this.addChild(this._cars2[car]);
            }
            // Add green cars
            this.cactus = new Array();
            for (var car = 0; car < this._carCount; car++) {
                this.cactus[car] = new objects.Cactus();
                this.addChild(this.cactus[car]);
            }
            // Add yellow cars
            this._camel = new Array();
            for (var car = 0; car < this._carCount; car++) {
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
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "14px Consolas", "#000000", 600, 70, false);
            this._scoreLabel.textAlign = "right";
            this.addChild(this._scoreLabel);
            // Add _timeLabel
            this._timeLabel = new objects.Label("" + this._timeRemaining, "30px Consolas", "#000000", 570, 225, false);
            this._timeLabel.textAlign = "right";
            this.addChild(this._timeLabel);
            // Add _livesLabel
            this._livesLabel = new objects.Label("Lives: " + livesValue, "14px Consolas", "#000000", 585, 390, false);
            this._livesLabel.textAlign = "right";
            this.addChild(this._livesLabel);
            // added collision3 manager to the scene
            this._collision3 = new managers.Collision3(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here ++++++++++++++++++++++++++++++++++++++
        Level3.prototype.update = function () {
            var _this = this;
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
            this._cars.forEach(function (car) {
                car.update();
                _this._collision3.check(car);
            });
            // Update blue car
            this._cars2.forEach(function (car2) {
                car2.update();
                _this._collision3.check(car2);
            });
            // Update cactus
            this.cactus.forEach(function (cactus) {
                cactus.update();
                _this._collision3.check(cactus);
            });
            // Update camel
            this._camel.forEach(function (camel) {
                camel.update();
                _this._collision3.check(camel);
            });
            this._collision3.check(this._water);
            this._updateScore();
        };
        /**
         * @method _updateScore
         * @return void
         */
        Level3.prototype._updateScore = function () {
            this._scoreLabel.text = "Score: " + scoreValue;
            this._timeLabel.text = "" + this._timeRemaining;
            this._livesLabel.text = "Lives: " + livesValue;
        };
        return Level3;
    })(objects.Scene);
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map