module objects {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    export class Wheel extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("wheel")

            // Generate random X coordinate
            var temp = Math.floor((Math.random() * 700) + 1);
            this._reset(this._rightBounds + temp);
            this.name = "wheel";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the car is outside the viewport
        protected _checkBounds(value: number): void {
            if (this.x <= value) {
                // Generate random X coordinate
                var temp = Math.floor((Math.random() * 700) + 1);
                this._reset(this._rightBounds + temp);
            }
        }
        
        // reset the wheel offscreen
        protected _reset(value: number): void {
            this.visible = true;    
            // Generate random speed for car
            this._speed.x = Math.floor((Math.random() * 8) + 6);
            this.x = value;
            // Generate random Y coordinate
            var temp = Math.floor((Math.random() * 410) + 1);
            this.y = temp;
            // switch (temp) {
            //     case 1: this.y = 24;
            //         break;
            //     case 2: this.y = 144;
            //         break;
            //     case 3: this.y = 268;
            //         break;
            //     case 4: this.y = 386;
            //         break;
            // }
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the car down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        }
    }
}