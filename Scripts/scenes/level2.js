var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Level2 SCENE
var scenes;
(function (scenes) {
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Level2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method ++++++++++++++++++++++++++++++++++++++
        Level2.prototype.start = function () {
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
            this._burningWheels = new Array();
            for (var wheel = 0; wheel < this._enemyCount; wheel++) {
                this._burningWheels[wheel] = new objects.BurningWheel();
                this.addChild(this._burningWheels[wheel]);
            }
            // Add Burning Wheel
            this._burningWheels2 = new Array();
            for (var wheel = 0; wheel < this._enemyCount; wheel++) {
                this._burningWheels2[wheel] = new objects.BurningWheel2();
                this.addChild(this._burningWheels2[wheel]);
            }
            // Add Burning Wheel
            this._burningWheels3 = new Array();
            for (var wheel = 0; wheel < this._enemyCount; wheel++) {
                this._burningWheels3[wheel] = new objects.BurningWheel3();
                this.addChild(this._burningWheels3[wheel]);
            }
            // Add Burning Wheel
            this._burningWheels4 = new Array();
            for (var wheel = 0; wheel < this._enemyCount; wheel++) {
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
            // added collision2 manager to the scene
            this._collision2 = new managers.Collision2(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here ++++++++++++++++++++++++++++++++++++++
        Level2.prototype.update = function () {
            var _this = this;
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
            this._burningWheels.forEach(function (burningWheel) {
                burningWheel.update();
                _this._collision2.check(burningWheel);
            });
            // Update blue car
            this._burningWheels2.forEach(function (burningWheel2) {
                burningWheel2.update();
                _this._collision2.check(burningWheel2);
            });
            // Update green car
            this._burningWheels3.forEach(function (burningWheel3) {
                burningWheel3.update();
                _this._collision2.check(burningWheel3);
            });
            // Update yellow car
            this._burningWheels4.forEach(function (burningWheel4) {
                burningWheel4.update();
                _this._collision2.check(burningWheel4);
            });
            this._collision2.check(this._wheel);
            this._updateScore();
        };
        /**
         * @method _updateScore
         * @return void
         */
        Level2.prototype._updateScore = function () {
            this._scoreLabel.text = "Score: " + scoreValue;
            this._timeLabel.text = "" + this._timeRemaining;
            this._livesLabel.text = "Lives: " + livesValue;
        };
        return Level2;
    }(objects.Scene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map