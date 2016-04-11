var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    var Desert = (function (_super) {
        __extends(Desert, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Desert() {
            _super.call(this, "desert");
            this._speed.x = 5; //desert speed
            this._reset(0);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Desert.prototype._checkBounds = function (value) {
            // check to see if the top of the desert 
            // is met the top of the scene
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the desert offscreen
        Desert.prototype._reset = function (value) {
            this.x = value;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Desert.prototype.update = function () {
            // scroll the desert 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(-640);
        };
        return Desert;
    })(objects.GameObject);
    objects.Desert = Desert;
})(objects || (objects = {}));
//# sourceMappingURL=desert.js.map