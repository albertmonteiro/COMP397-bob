var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// End SCENE
var scenes;
(function (scenes) {
    var ThankYou = (function (_super) {
        __extends(ThankYou, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function ThankYou() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        ThankYou.prototype.start = function () {
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("thankYouBackground"));
            this.addChild(this._backgroundImage);
            //Add Menu Label
            this._endLabel = new objects.Label("THANK YOU!", "60px Algerian", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y - 20, true);
            this.addChild(this._endLabel);
            // add the RESTART button to the OVER scene
            // this._restartButton = new objects.Button(
            //     "restartPedal",
            //     config.Screen.CENTER_X + 250,
            //     config.Screen.CENTER_Y + 70, true);
            // this.addChild(this._restartButton);
            // START_OVER Button event listener
            // this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // RESTART Button click event handler
        ThankYou.prototype._restartButtonClick = function (event) {
            // Switch to the LEVEL1 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        return ThankYou;
    })(objects.Scene);
    scenes.ThankYou = ThankYou;
})(scenes || (scenes = {}));
//# sourceMappingURL=thankYou.js.map