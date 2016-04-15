var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Win Scene
var scenes;
(function (scenes) {
    var Win = (function (_super) {
        __extends(Win, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Win() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        Win.prototype.start = function () {
            //Set High Score Value
            if (scoreValue > highScoreValue) {
                highScoreValue = scoreValue;
            }
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("winSceneBackground"));
            this.addChild(this._backgroundImage);
            //Add Menu Label
            this._endLabel = new objects.Label("YOU WIN!", "60px Algerian", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._endLabel);
            //Add Score Label
            this._scoreLabel = new objects.Label("Your Score: " + scoreValue, "40px Algerian", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._scoreLabel);
            //Add HighScore Label
            this._highScoreLabel = new objects.Label("High Score: " + highScoreValue, "40px Algerian", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._highScoreLabel);
            // add the RESTART button to the OVER scene
            this._restartButton = new objects.Button("restartPedal", config.Screen.CENTER_X + 250, config.Screen.CENTER_Y + 70, true);
            this.addChild(this._restartButton);
            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button("exitButton", config.Screen.CENTER_X + 340, config.Screen.CENTER_Y - 210, true);
            this.addChild(this._exitButton);
            // Button event listeners
            this._restartButton.on("click", this._restartButtonClick, this);
            this._exitButton.on("click", this._exitButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // RESTART Button click event handler
        Win.prototype._restartButtonClick = function (event) {
            // Switch to the LEVEL1 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        // Exit button click event handler
        Win.prototype._exitButtonClick = function (event) {
            // Switch to the THANKYOU Scene
            scene = config.Scene.THANKYOU;
            changeScene();
        };
        return Win;
    }(objects.Scene));
    scenes.Win = Win;
})(scenes || (scenes = {}));
//# sourceMappingURL=win.js.map