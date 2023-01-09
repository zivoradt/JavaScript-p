let core;

// Core modelu - IIFE
(function (core) {
  // App variables

  let clickMeButton;
  let buttonSection;
  let firstH1;



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

  
  
    

    Main();
  };

  /**
   * This function is where the main functionality for the web app is happening
   */

  function Main() {
    console.log(`%c App Started...`, "font-wheight: bold; font-size: 20px;");
  
    
  buttonSection.appendChild(clickMeButton);

  clickMeButton.addEventListener("click", function () {
    firstH1.textContent = "Click me button is clicked!";
  });

};
  

  window.addEventListener("load", Start);
})(core || (core = {}));
