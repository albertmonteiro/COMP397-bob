var managers;
(function (managers) {
    // COLLISION MANAGER CLASS
    var Collision2 = (function () {
        // CONSTRUCTOR ++++++++++++++++
        function Collision2(player) {
            this._player = player;
        }
        Collision2.prototype.distance = function (startPoint, endPoint) {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x), 2) + Math.pow(endPoint.y - startPoint.y, 2));
        };
        // check method ++++++++++++++++
        Collision2.prototype.check = function (object) {
            var startPoint = new createjs.Point();
            var endPoint = new createjs.Point();
            var playerHalfHeight = this._player.height * 0.5;
            var objectHalfHeight = object.height * 0.5;
            var minimumDistance = playerHalfHeight + objectHalfHeight;
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            /* check if the distance between the player and
              the other object is less than the minimum distance */
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                if (!object.isColliding) {
                    // check if it's a gas tank
                    if (object.name === "wheel") {
                        // Play gastankSound
                        this._gastankSound = createjs.Sound.play("gastankSound");
                        scoreValue += 10; //award 10 points
                    }
                    // check if it's an enemy car
                    if (object.name === "burningWheel" || object.name === "blue_car"
                        || object.name === "green_car" || object.name === "yellow_car") {
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
        }; // End of check method
        return Collision2;
    })();
    managers.Collision2 = Collision2;
})(managers || (managers = {}));
//# sourceMappingURL=collision2.js.map