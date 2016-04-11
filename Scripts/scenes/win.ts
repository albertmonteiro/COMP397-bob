// Win Scene
module scenes {
    export class Win extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _backgroundImage: createjs.Bitmap;
        private _endLabel: objects.Label;
        private _restartButton: objects.Button;
        private _exitButton: objects.Button;
        private _scoreLabel: objects.Label;
        private _highScoreLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {
            //Set High Score Value
            if (scoreValue > highScoreValue) {
                highScoreValue = scoreValue;
            }
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("winSceneBackground"));
            this.addChild(this._backgroundImage);

            //Add Menu Label
            this._endLabel = new objects.Label(
                "YOU WIN!", "60px Algerian",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._endLabel);

            //Add Score Label
            this._scoreLabel = new objects.Label(
                "Your Score: " + scoreValue, "40px Algerian",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._scoreLabel);
            
            //Add HighScore Label
            this._highScoreLabel = new objects.Label(
                "High Score: " + highScoreValue, "40px Algerian",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._highScoreLabel);

            // add the RESTART button to the OVER scene
            this._restartButton = new objects.Button(
                "restartPedal",
                config.Screen.CENTER_X + 250,
                config.Screen.CENTER_Y + 70, true);
            this.addChild(this._restartButton);
            
            // add the Exit button to the MENU scene
            this._exitButton = new objects.Button(
                "exitButton",
                config.Screen.CENTER_X + 340,
                config.Screen.CENTER_Y - 210, true);
            this.addChild(this._exitButton);
           
            // Button event listeners
            this._restartButton.on("click", this._restartButtonClick, this);
            this._exitButton.on("click", this._exitButtonClick, this);

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
        
        // Exit button click event handler
        private _exitButtonClick(event: createjs.MouseEvent) {
            // Switch to the THANKYOU Scene
            scene = config.Scene.THANKYOU;
            changeScene();
        }
    }
}