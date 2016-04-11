// Instruction SCENE
module scenes {
    export class Instruction1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _menuLabel: objects.Label;
        private _backButton: objects.Button;
        private _exitButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("instruction1Background"));
            this.addChild(this._backgroundImage);

            //Add Menu Label
            // this._menuLabel = new objects.Label(
            //     "INSTRUCTIONS", "60px Consolas",
            //     "#ffff00",
            //     config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            // this.addChild(this._menuLabel);

            // add the Back button to the MENU scene
            //just
            this._backButton = new objects.Button(
                "backButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 150, true);
            this.addChild(this._backButton);
            
            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button(
                "exitButton",
                config.Screen.CENTER_X + 340,
                config.Screen.CENTER_Y - 210, true);
            this.addChild(this._exitButton);

            // Button event listeners
            this._backButton.on("click", this._backButtonClick, this);
            this._exitButton.on("click", this._exitButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        //EVENT HANDLERS ++++++++++++++++++++

        // Back Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }
        
        // Exit button click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            // Switch to the THANKYOU Scene
            scene = config.Scene.THANKYOU;
            changeScene();
        }

    }
}