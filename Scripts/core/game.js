/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
var livesValue;
var scoreValue;
var highScoreValue = 0;
// Game Scenes
var menu;
var instruction1;
var instruction2;
var instruction3;
var level1;
var level2;
var level3;
var end;
var win;
var thankYou;
var assetData = [
    // Add your Assets here
    { id: "menuBackground", src: "../../Assets/images/menuBackground.png" },
    { id: "menuBackground3", src: "../../Assets/images/menuBackground3.png" },
    { id: "instruction1Background", src: "../../Assets/images/instruction1Background.png" },
    { id: "endSceneBackground", src: "../../Assets/images/endSceneBackground.png" },
    { id: "winSceneBackground", src: "../../Assets/images/winSceneBackground.png" },
    { id: "thankYouBackground", src: "../../Assets/images/thankYouBackground.png" },
    { id: "startButton", src: "../../Assets/images/startButton.png" },
    { id: "instructionButton", src: "../../Assets/images/instructionButton.png" },
    { id: "backButton", src: "../../Assets/images/backButton.png" },
    { id: "exitButton", src: "../../Assets/images/exitButton.png" },
    { id: "level1", src: "../../Assets/images/level1.png" },
    { id: "level2", src: "../../Assets/images/level2.png" },
    { id: "level3", src: "../../Assets/images/level3.png" },
    { id: "restartPedal", src: "../../Assets/images/restartPedal.png" },
    // Level1 assets
    { id: "road", src: "../../Assets/images/road.png" },
    { id: "desert", src: "../../Assets/images/desert.png" },
    { id: "player_car", src: "../../Assets/images/player_car.png" },
    { id: "red_car", src: "../../Assets/images/red_car.png" },
    { id: "blue_car", src: "../../Assets/images/blue_car.png" },
    { id: "green_car", src: "../../Assets/images/green_car.png" },
    { id: "yellow_car", src: "../../Assets/images/yellow_car.png" },
    { id: "gas", src: "../../Assets/images/gas_can.png" },
    { id: "level1ScoreBox", src: "../../Assets/images/level1ScoreBox.png" },
    { id: "level1LivesBox", src: "../../Assets/images/level1LivesBox.png" },
    { id: "level1TImerBox", src: "../../Assets/images/level1TImerBox.png" },
    { id: "camel", src: "../../Assets/images/camel.png" },
    { id: "cactus", src: "../../Assets/images/cactus.png" },
    { id: "water", src: "../../Assets/images/water_can.png" },
    { id: "level1BackgroundMusic", src: "../../Assets/audio/level1BackgroundMusic.mp3" },
    { id: "carStartSound", src: "../../Assets/audio/carStartSound.mp3" },
    { id: "carCrashSound", src: "../../Assets/audio/carCrashSound.mp3" },
    { id: "gastankSound", src: "../../Assets/audio/gastankSound.mp3" },
    // Level2 assets
    { id: "level2Road", src: "../../Assets/images/level2Road.png" },
    { id: "wheel", src: "../../Assets/images/wheel.png" },
    { id: "burningWheel", src: "../../Assets/images/burningWheel.png" },
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INSTRUCTION1:
            // show the INSTRUCTION1 scene
            stage.removeAllChildren();
            instruction1 = new scenes.Instruction1();
            currentScene = instruction1;
            console.log("Starting INSTRUCTION1 Scene");
            break;
        case config.Scene.INSTRUCTION2:
            // show the INSTRUCTION2 scene
            stage.removeAllChildren();
            instruction2 = new scenes.Instruction2();
            currentScene = instruction2;
            console.log("Starting INSTRUCTION2 Scene");
            break;
        case config.Scene.INSTRUCTION3:
            // show the INSTRUCTION3 scene
            stage.removeAllChildren();
            instruction3 = new scenes.Instruction3();
            currentScene = instruction3;
            console.log("Starting INSTRUCTION3 Scene");
            break;
        case config.Scene.LEVEL1:
            // show the LEVEL1 scene
            stage.removeAllChildren();
            level1 = new scenes.Level1();
            currentScene = level1;
            console.log("Starting LEVEL1 Scene");
            break;
        case config.Scene.LEVEL2:
            // show the LEVEL2 scene
            stage.removeAllChildren();
            level2 = new scenes.Level2();
            currentScene = level2;
            console.log("Starting LEVEL2 Scene");
            break;
        case config.Scene.LEVEL3:
            // show the LEVEL3 scene
            stage.removeAllChildren();
            level3 = new scenes.Level3();
            currentScene = level3;
            console.log("Starting LEVEL3 Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
        case config.Scene.WIN:
            // show the WIN scene
            stage.removeAllChildren();
            win = new scenes.Win();
            currentScene = win;
            console.log("Starting WIN Scene");
            break;
        case config.Scene.THANKYOU:
            // show the THANKYOU scene
            stage.removeAllChildren();
            thankYou = new scenes.ThankYou();
            currentScene = thankYou;
            console.log("Starting THANKYOU Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
//# sourceMappingURL=game.js.map