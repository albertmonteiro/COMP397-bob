var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.INSTRUCTION1 = 1;
        Scene.INSTRUCTION2 = 2;
        Scene.INSTRUCTION3 = 3;
        Scene.LEVEL1 = 4;
        Scene.LEVEL2 = 5;
        Scene.LEVEL3 = 6;
        Scene.END = 7;
        Scene.WIN = 8;
        Scene.THANKYOU = 9;
        return Scene;
    }());
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=config.js.map