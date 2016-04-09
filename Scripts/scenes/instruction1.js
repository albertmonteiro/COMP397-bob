var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Instruction SCENE
var scenes;
(function (scenes) {
    var Instruction1 = (function (_super) {
        __extends(Instruction1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instruction1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instruction1.prototype.start = function () {
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("menuBackground"));
            this.addChild(this._backgroundImage);
            //Add Menu Label
            this._menuLabel = new objects.Label("INSTRUCTIONS", "60px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            // add the Back button to the MENU scene
            this._backButton = new objects.Button("backButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150, true);
            this.addChild(this._backButton);
            // Start Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Button click event handler
        Instruction1.prototype._backButtonClick = function (event) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instruction1;
    }(objects.Scene));
    scenes.Instruction1 = Instruction1;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction1.js.map