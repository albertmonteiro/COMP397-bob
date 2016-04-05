// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;
        private _level1Button: objects.Button;
        private _level2Button: objects.Button;
        private _level3Button: objects.Button;
         private _backgroundImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // add background to menu page
            this._backgroundImage = new createjs.Bitmap(assets.getResult("MenuBackground"));
            this.addChild(this._backgroundImage);
            
            // added ocean to the scene
           // this._ocean = new objects.Ocean();
            // this.addChild(this._ocean);
            
            //Add Menu Label
            this._menuLabel = new objects.Label(
                "Burning Tires", "60px Consolas",
                "#ffffff",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 200, true);
            this.addChild(this._menuLabel);
            
            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._startButton);
            
            // add the Instruction button to the MENU scene
            this._instructionButton = new objects.Button(
                "InstructionButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._instructionButton);
            
            // add the LEVEL1 button to the MENU scene
            this._level1Button = new objects.Button(
                "Level1",
                config.Screen.CENTER_X + 180,
                config.Screen.CENTER_Y + 20, true);
            this.addChild(this._level1Button);
            
            // add the LEVEL2 button to the MENU scene
            this._level2Button = new objects.Button(
                "Level2",
                config.Screen.CENTER_X + 180,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._level2Button);
            
            // add the LEVEL3 button to the MENU scene
            this._level3Button = new objects.Button(
                "Level3",
                config.Screen.CENTER_X + 180,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._level3Button);
            
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._instructionButton.on("click", this._instructionButtonClick, this);
            this._level1Button.on("click", this._level1ButtonClick, this);
            this._level2Button.on("click", this._level2ButtonClick, this);
            this._level3Button.on("click", this._level3ButtonClick, this);
            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        // public update(): void {
           // this._ocean.update();
        // }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL1 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }
        
        // Instruction button click event handler
        private _instructionButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL1 Scene
            scene = config.Scene.INSTRUCTION1;
            changeScene();
        }
        
        // LEVEL1 Button click event handler
        private _level1ButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL1 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }
        
        // LEVEL2 Button click event handler
        private _level2ButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL2 Scene
            scene = config.Scene.INSTRUCTION2;
            changeScene();
        }
        
        // LEVEL3 Button click event handler
        private _level3ButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEVEL3 Scene
            scene = config.Scene.INSTRUCTION3;
            changeScene();
        }

    }
}