﻿module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static INSTRUCTION1: number = 1;
        public static INSTRUCTION2: number = 2;
        public static INSTRUCTION3: number = 3;
        public static LEVEL1: number = 4;
        public static LEVEL2: number = 5;
        public static LEVEL3: number = 6;
        public static END: number = 7;
        public static WIN: number = 8;
        public static THANKYOU: number = 9;
    }
    
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}