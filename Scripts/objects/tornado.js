var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    var Tornado = (function (_super) {
        __extends(Tornado, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Tornado() {
            _super.call(this, "tornado");
            // Generate random X coordinate
            var temp = Math.floor((Math.random() * 1000) + 1);
            this._reset(this._rightBounds + temp);
            this.name = "tornado";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        // check to see if the car is outside the viewport
        Tornado.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                // Generate random X coordinate
                var temp = Math.floor((Math.random() * 1000) + 1);
                this._reset(this._rightBounds + temp);
            }
        };
        // reset the car offscreen
        Tornado.prototype._reset = function (value) {
            // Generate random speed for car
            this._speed.x = Math.floor((Math.random() * 10) + 6);
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
        Tornado.prototype.update = function () {
            // scroll the car down the screen
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - 100);
        };
        return Tornado;
    })(objects.GameObject);
    objects.Tornado = Tornado;
})(objects || (objects = {}));
//# sourceMappingURL=tornado.js.map