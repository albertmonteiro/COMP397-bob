// End SCENE
module scenes {
    export class ThankYou extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _endLabel: objects.Label;
        private _restartButton: objects.Button;
        private _scoreLabel: objects.Label;
        private _highScoreLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("thankYouBackground"));
            this.addChild(this._backgroundImage);

            //Add Menu Label
            this._endLabel = new objects.Label(
                "THANK YOU!", "60px Algerian",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 20, true);
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
        }
        
        //EVENT HANDLERS ++++++++++++++++++++

        // RESTART Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL1 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }
    }
}