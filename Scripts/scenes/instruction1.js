var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
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
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            //Add Menu Label
            this._menuLabel = new objects.Label("INSTRUCTIONS", "60px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            // add the Back button to the MENU scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);
            // Start Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Instruction1.prototype.update = function () {
            this._ocean.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
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