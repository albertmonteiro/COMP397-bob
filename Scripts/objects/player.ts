module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _topBounds: number;
        private _bottomBounds: number;
        private _oldY: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        public level1BackgroundMusic: createjs.AbstractSoundInstance;
        constructor() {
            super(assets.getResult("player_car"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = 100;
            
            // assign and play the engine sound
            this.level1BackgroundMusic = createjs.Sound.play("level1BackgroundMusic");
            // Loop engine sound forever
            this.level1BackgroundMusic.loop = -1;
            
            this._oldY = 0;
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }

            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }
        
        private _rotatePlayer(){
            if (this._oldY < this.y){
                this.rotation = 10;
            }
            else if (this._oldY > this.y) {
                this.rotation = -10;
            }
            else this.rotation = 0; 
            this._oldY = this.y;
        }
        
        // PUBLIC METHODS
        public update(): void {
            this.y = stage.mouseY;
            this._checkBounds();
            this._rotatePlayer();
        }
    }
}