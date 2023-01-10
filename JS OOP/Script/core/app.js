let core;

// Core modelu - IIFE
(function (core) {
  // App variables

  let clickMeButton;
  let buttonSection;
  let firstH1;
  let vec1;
  let vec2;
  let canvas;
  let graphics;
  let stage;
  let line;


  /**
   * THis function is used for initialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-wheight: bold; font-size: 20px;"
    );
    clickMeButton = new objects.Button("/Asssets/images/click.png", 100, 50);
    buttonSection = document.getElementById("buttonSection");
    firstH1 = document.getElementsByTagName("h1")[0];

    vec1 = new objects.Vector(100,200);
    vec2 = new objects.Vector(300,400);

    canvas = document.getElementById("canvas");

    stage = new createjs.Stage("canvas");
    createjs.Ticker.framerate = 60; //60 fps
    createjs.Ticker.addEventListener("tick", GameLoop);

    graphics = new createjs.Graphics();
    line = new createjs.Shape(graphics);
  
    

    Main();
  };

  function GameLoop(){
    line.x += 1;
    stage.update();
  }

  /**
   * This function is where the main functionality for the web app is happening
   */

  function Main() {
    console.log(`%c App Started...`, "font-wheight: bold; font-size: 20px;");
  
    
  buttonSection.appendChild(clickMeButton);

  clickMeButton.addEventListener("click", function () {
    firstH1.textContent = "Click me button is clicked!";
  });

  console.log(`Distance: ${objects.Vector.distance(vec1, vec2)}`);
  graphics.setStrokeStyle(2);
  graphics.beginStroke("#000000");

  graphics.moveTo(vec1.x, vec1.y);
  graphics.lineTo(vec2.x, vec2.y);
  graphics.endStroke();
  

  stage.addChild(line);

};
  

  window.addEventListener("load", Start);
})(core || (core = {}));
