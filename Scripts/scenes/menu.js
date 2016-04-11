var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("menuBackground"));
            this.addChild(this._backgroundImage);
            //Add Menu Label
            this._menuLabel = new objects.Label("BURNING TIRES!", "60px Algerian", "#ffff00", config.Screen.CENTER_X, config.Screen.CENTER_Y - 120, true);
            this.addChild(this._menuLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("startButton", config.Screen.CENTER_X + 230, config.Screen.CENTER_Y + 120, true);
            this.addChild(this._startButton);
            // add the Instruction button to the MENU scene
            this._instructionButton = new objects.Button("instructionButton", config.Screen.CENTER_X + 230, config.Screen.CENTER_Y + 200, true);
            this.addChild(this._instructionButton);
            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button("exitButton", config.Screen.CENTER_X + 340, config.Screen.CENTER_Y - 210, true);
            this.addChild(this._exitButton);
            // add the LEVEL1 button to the MENU scene
            this._level1Button = new objects.Button("level1", config.Screen.CENTER_X - 160, config.Screen.CENTER_Y + 200, true);
            this.addChild(this._level1Button);
            // add the LEVEL2 button to the MENU scene
            this._level2Button = new objects.Button("level2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 200, true);
            this.addChild(this._level2Button);
            // add the LEVEL3 button to the MENU scene
            this._level3Button = new objects.Button("level3", config.Screen.CENTER_X + 160, config.Screen.CENTER_Y + 200, true);
            this.addChild(this._level3Button);
            // Button event listeners
            this._startButton.on("click", this._startButtonClick, this);
            this._instructionButton.on("click", this._instructionButtonClick, this);
            this._exitButton.on("click", this._exitButtonClick, this);
            this._level1Button.on("click", this._level1ButtonClick, this);
            this._level2Button.on("click", this._level2ButtonClick, this);
            this._level3Button.on("click", this._level3ButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Play carStartSound
            this._carStartSound = createjs.Sound.play("carStartSound");
            // Switch to the LEVEL1 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        // Instruction button click event handler
        Menu.prototype._instructionButtonClick = function (event) {
            // Switch to the INSTRUCTION1 Scene
            scene = config.Scene.INSTRUCTION1;
            changeScene();
        };
        // Exit button click event handler
        Menu.prototype._exitButtonClick = function (event) {
            // Switch to the THANKYOU Scene
            scene = config.Scene.THANKYOU;
            changeScene();
        };
        // LEVEL1 Button click event handler
        Menu.prototype._level1ButtonClick = function (event) {
            // Switch to the LEVEL1 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        // LEVEL2 Button click event handler
        Menu.prototype._level2ButtonClick = function (event) {
            // Switch to the LEVEL2 Scene
            scene = config.Scene.INSTRUCTION2;
            changeScene();
        };
        // LEVEL3 Button click event handler
        Menu.prototype._level3ButtonClick = function (event) {
            // Switch to the LEVEL3 Scene
            scene = config.Scene.INSTRUCTION3;
            changeScene();
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map