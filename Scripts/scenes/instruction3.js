var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Instruction3 SCENE
var scenes;
(function (scenes) {
    var Instruction3 = (function (_super) {
        __extends(Instruction3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instruction3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instruction3.prototype.start = function () {
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("instruction3Background"));
            this.addChild(this._backgroundImage);
            // //Add Menu Label
            // this._menuLabel = new objects.Label(
            //     "LEVEL 3 : Desert", "60px Algerian",
            //     "#ffff00",
            //     config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            // this.addChild(this._menuLabel);
            // add the Back button to the MENU scene
            this._backButton = new objects.Button("startButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100, true);
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
        Instruction3.prototype._backButtonClick = function (event) {
            // Play carStartSound
            this._carStartSound = createjs.Sound.play("carStartSound");
            // Switch to the LEVEL3 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        // Exit button click event handler
        Instruction3.prototype._exitButtonClick = function (event) {
            // Play mouse click sound
            this._mouseClickSound = createjs.Sound.play("mouseClick");
            // Switch to the THANKYOU Scene
            scene = config.Scene.THANKYOU;
            changeScene();
        };
        return Instruction3;
    }(objects.Scene));
    scenes.Instruction3 = Instruction3;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction3.js.map