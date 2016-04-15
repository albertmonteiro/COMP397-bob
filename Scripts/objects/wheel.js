var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    var Wheel = (function (_super) {
        __extends(Wheel, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Wheel() {
            _super.call(this, "wheel");
            // Generate random X coordinate
            var temp = Math.floor((Math.random() * 700) + 1);
            this._reset(this._rightBounds + temp);
            this.name = "wheel";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the car is outside the viewport
        Wheel.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                // Generate random X coordinate
                var temp = Math.floor((Math.random() * 700) + 1);
                this._reset(this._rightBounds + temp);
            }
        };
        // reset the wheel offscreen
        Wheel.prototype._reset = function (value) {
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
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Wheel.prototype.update = function () {
            // scroll the car down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        };
        return Wheel;
    }(objects.GameObject));
    objects.Wheel = Wheel;
})(objects || (objects = {}));
//# sourceMappingURL=wheel.js.map