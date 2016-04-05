var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
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
            this._backgroundImage = new createjs.Bitmap(assets.getResult("MenuBackground"));
            this.addChild(this._backgroundImage);
            // added ocean to the scene
            // this._ocean = new objects.Ocean();
            // this.addChild(this._ocean);
            //Add Menu Label
            this._menuLabel = new objects.Label("LEVEL 2", "60px Consolas", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        //     public update(): void {
        //       this._ocean.update();
        //  }
        //EVENT HANDLERS ++++++++++++++++++++
        // START Button click event handler
        Instruction2.prototype._startButtonClick = function (event) {
            // Switch to the LEVEL2 Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        };
        return Instruction2;
    })(objects.Scene);
    scenes.Instruction2 = Instruction2;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction2.js.map