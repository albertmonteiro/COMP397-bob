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
var play;
var end;
var level1;
var level2;
var level3;
var instruction1;
var instruction2;
var instruction3;
var assetData = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/StartButton.png" },
    { id: "InstructionButton", src: "../../Assets/images/InstructionButton.png" },
    { id: "MenuBackground", src: "../../Assets/images/MenuBackground.png" },
    { id: "Level1", src: "../../Assets/images/Level1.png" },
    { id: "Level2", src: "../../Assets/images/Level2.png" },
    { id: "Level3", src: "../../Assets/images/Level3.png" },
    { id: "RestartButton", src: "../../Assets/images/RestartButton.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "ocean", src: "../../Assets/images/ocean.gif" },
    { id: "plane", src: "../../Assets/images/plane.png" },
    { id: "island", src: "../../Assets/images/island.png" },
    { id: "cloud", src: "../../Assets/images/cloud.png" },
    { id: "engine", src: "../../Assets/audio/engine.ogg" },
    { id: "yay", src: "../../Assets/audio/yay.ogg" },
    { id: "thunder", src: "../../Assets/audio/thunder.ogg" }
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
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
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
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
//# sourceMappingURL=game.js.map