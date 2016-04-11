var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Instruction2 SCENE
var scenes;
(function (scenes) {
    var Instruction2 = (function (_super) {
        __extends(Instruction2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instruction2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instruction2.prototype.start = function () {
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("menuBackground"));
            this.addChild(this._backgroundImage);
            //Add Menu Label
            this._menuLabel = new objects.Label("LEVEL 2", "60px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            // add the Back button to the MENU scene
            this._backButton = new objects.Button("startButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150, true);
            this.addChild(this._backButton);
            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button("exitButton", config.Screen.CENTER_X + 340, config.Screen.CENTER_Y - 210, true);
            this.addChild(this._exitButton);
            // Button event listeners
            this._backButton.on("click", this._backButtonClick, this);
            this._exitButton.on("click", this._exitButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Button click event handler
        Instruction2.prototype._backButtonClick = function (event) {
            // Switch to the LEVEL2 Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        };
        // Exit button click event handler
        Instruction2.prototype._exitButtonClick = function (event) {
            // Switch to the THANKYOU Scene
            scene = config.Scene.THANKYOU;
            changeScene();
        };
        return Instruction2;
    }(objects.Scene));
    scenes.Instruction2 = Instruction2;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction2.js.map