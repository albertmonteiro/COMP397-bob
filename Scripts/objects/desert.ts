module objects {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    export class Desert extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("desert");
            
           this._speed.x = 5; //desert speed
           this._reset(0);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the desert 
            // is met the top of the scene
            
            if(this.x <= value) {
                this._reset(0);
            }
        }
        
        // reset the desert offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the desert 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(-640);
        }
    }
}