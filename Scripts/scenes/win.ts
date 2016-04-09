// Win Scene
module scenes {
    export class Win extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _road: objects.Road;
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
            //Set High Score Value
            if (scoreValue > highScoreValue) {
                highScoreValue = scoreValue;
            }

            // added ocean to the scene
            this._road = new objects.Road();
            this.addChild(this._road);

            //Add Menu Label
            this._endLabel = new objects.Label(
                "YOU WIN!", "60px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._endLabel);

            //Add Score Label
            this._scoreLabel = new objects.Label(
                "Your Score: " + scoreValue, "40px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._scoreLabel);
            
            //Add HighScore Label
            this._highScoreLabel = new objects.Label(
                "High Score: " + highScoreValue, "40px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y + 80, true);
            this.addChild(this._highScoreLabel);

            // add the RESTART button to the OVER scene
            this._restartButton = new objects.Button(
                "restartPedal",
                config.Screen.CENTER_X + 250,
                config.Screen.CENTER_Y + 70, true);
            this.addChild(this._restartButton);
           
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._road.update();
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