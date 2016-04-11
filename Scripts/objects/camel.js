var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CAMEL CLASS ++++++++++++++++++++++++++++++++++++
    var Camel = (function (_super) {
        __extends(Camel, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Camel() {
            _super.call(this, "camel");
            // Generate random X coordinate
            var temp = Math.floor((Math.random() * 1000) + 1);
            this._reset(this._rightBounds + temp);
            this.name = "camel";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the camel is outside the viewport
        Camel.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                // Generate random X coordinate
                var temp = Math.floor((Math.random() * 1000) + 1);
                this._reset(this._rightBounds + temp);
            }
        };
        // reset the camel offscreen
        Camel.prototype._reset = function (value) {
            // Generate random speed for camel
            this._speed.x = Math.floor((Math.random() * 10) + 6);
            this.x = value;
            // Generate random Y coordinate
            var temp = Math.floor((Math.random() * 410) + 1);
            this.y = temp;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Camel.prototype.update = function () {
            // scroll the camel down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        };
        return Camel;
    }(objects.GameObject));
    objects.Camel = Camel;
})(objects || (objects = {}));
//# sourceMappingURL=camel.js.map