var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// End SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            //Set High Score Value
            if (scoreValue > highScoreValue) {
                highScoreValue = scoreValue;
            }
            // added ocean to the scene
            this._road = new objects.Road();
            this.addChild(this._road);
            //Add Menu Label
            this._endLabel = new objects.Label("GAME OVER!", "60px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._endLabel);
            //Add Score Label
            this._scoreLabel = new objects.Label("Your Score: " + scoreValue, "40px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._scoreLabel);
            //Add HighScore Label
            this._highScoreLabel = new objects.Label("High Score: " + highScoreValue, "40px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._highScoreLabel);
            // add the RESTART button to the OVER scene
            this._restartButton = new objects.Button("restartPedal", config.Screen.CENTER_X + 250, config.Screen.CENTER_Y + 70, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
            this._road.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // RESTART Button click event handler
        End.prototype._restartButtonClick = function (event) {
            // Switch to the LEVEL1 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map