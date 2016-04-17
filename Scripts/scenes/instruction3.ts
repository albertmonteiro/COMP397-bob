// Instruction3 SCENE
module scenes {
    export class Instruction3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _menuLabel: objects.Label;
        private _backButton: objects.Button;
        private _exitButton: objects.Button;
        private _carStartSound: createjs.AbstractSoundInstance;
        private _mouseClickSound: createjs.AbstractSoundInstance;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
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
            this._backButton = new objects.Button(
                "startButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 100, true);
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

        // Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Play carStartSound
            this._carStartSound = createjs.Sound.play("carStartSound");
            // Switch to the LEVEL3 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }
        
        // Exit button click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            // Play mouse click sound
            this._mouseClickSound = createjs.Sound.play("mouseClick");
            // Switch to the THANKYOU Scene
            scene = config.Scene.THANKYOU;
            changeScene();
        }

    }
}