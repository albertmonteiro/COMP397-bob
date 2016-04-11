module objects {
    // CAMEL CLASS ++++++++++++++++++++++++++++++++++++
    export class Camel extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("camel")

            // Generate random X coordinate
            var temp = Math.floor((Math.random() * 1000) + 1);
            this._reset(this._rightBounds + temp);
            this.name = "camel";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the camel is outside the viewport
        protected _checkBounds(value: number): void {
            if (this.x <= value) {
                // Generate random X coordinate
                var temp = Math.floor((Math.random() * 1000) + 1);
                this._reset(this._rightBounds + temp);
            }
        }
        
        // reset the camel offscreen
        protected _reset(value: number): void {
            // Generate random speed for camel
            this._speed.x = Math.floor((Math.random() * 10) + 6);
            this.x = value;
            // Generate random Y coordinate
            var temp = Math.floor((Math.random() * 410) + 1);
            this.y = temp;          
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the camel down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        }
    }
}