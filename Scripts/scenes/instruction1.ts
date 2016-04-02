// MENU SCENE
module scenes {
    export class Instruction1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _menuLabel: objects.Label;
        private _backButton: objects.Button;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            
            //Add Menu Label
            this._menuLabel = new objects.Label(
                "INSTRUCTIONS", "60px Consolas",
                "#ffff00",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            
            // add the Back button to the MENU scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);
            
            // Start Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {
            this._ocean.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }

    }
}