module managers {
    // COLLISION MANAGER CLASS
    export class Collision3 {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++
        private _player: objects.Player;
        private _gastankSound: createjs.AbstractSoundInstance;
        private _carCrashSound: createjs.AbstractSoundInstance;
        
        // CONSTRUCTOR ++++++++++++++++
        constructor(player: objects.Player) {
            this._player = player;
        }
        
        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2))
        }
        
        // check method ++++++++++++++++
        public check(object: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;

            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            /* check if the distance between the player and 
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    // check if it's a water tank
                    if (object.name === "water") {
                        // Play gastankSound
                        this._gastankSound = createjs.Sound.play("gastankSound");
                        scoreValue += 10; //award 10 points
                    }
                    
                    // check if it's an enemy car
                    if (object.name === "snake" || object.name === "scorpian"
                        || object.name === "cactus" || object.name === "camel"
                        || object.name === "tornado") {
                        // Play carCrashSound
                        this._carCrashSound = createjs.Sound.play("carCrashSound");
                        livesValue--; // lose a life
                        
                        // check if player has no more lives
                        if (livesValue <= 0) {
                            // turn off player engine
                            this._player.level1BackgroundMusic.stop();
                            // switch to END scene
                            scene = config.Scene.END;
                            changeScene();
                        }
                    }
                    object.isColliding = true;
                }
            }
            else {
                object.isColliding = false;
            }
        } // End of check method
        
    }
}