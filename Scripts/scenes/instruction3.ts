// Instruction3 SCENE
module scenes {
    export class Instruction3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _backButton: objects.Button;
        private _backgroundImage: createjs.Bitmap;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("menuBackground3"));
            this.addChild(this._backgroundImage);

            //Add Menu Label
            this._menuLabel = new objects.Label(
                "LEVEL 3 : Desert", "60px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);

            // add the Back button to the MENU scene
            this._backButton = new objects.Button(
                "startButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._backButton);

            // Start Button event listener
            this._backButton.on("click", this._backButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        //EVENT HANDLERS ++++++++++++++++++++

        // Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL3 Scene
            scene = config.Scene.LEVEL3;
            changeScene();
        }

    }
}