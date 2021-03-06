var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, assets.getResult("player_car"));
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
        Player.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        };
        Player.prototype._rotatePlayer = function () {
            if (this._oldY < this.y) {
                this.rotation = 10;
            }
            else if (this._oldY > this.y) {
                this.rotation = -10;
            }
            else
                this.rotation = 0;
            this._oldY = this.y;
        };
        // PUBLIC METHODS
        Player.prototype.update = function () {
            this.y = stage.mouseY;
            this._checkBounds();
            this._rotatePlayer();
        };
        return Player;
    }(createjs.Bitmap));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map