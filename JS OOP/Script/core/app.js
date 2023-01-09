let core;

// Core modelu - IIFE
(function (core) {
  // App variables

  let rollButton;
  let result;

  let minRange;
  let maxRange;
  let minRangeValue;
  let maxRangeValue;
  let min;
  let max;



function radnomRange(min, max){
  let random;
  let mix = (max-min)+1;

  random = Math.floor((Math.random() * mix)+min); 

  return random;
}

function addToResult(){

}


  /**
   * THis function is used for initialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-wheight: bold; font-size: 20px;"
    );

  rollButton = document.getElementById("rollButton");

  result = document.getElementById("result");

  minRange = document.getElementById("minRange");
  maxRange = document.getElementById("maxRange");

  minRangeValue = document.getElementById("minRangeValue");
  maxRangeValue = document.getElementById("maxRangeValue");

  min = 1;
  max = 6;
  
    

    Main();
  }

  /**
   * This function is where the main functionality for the web app is happening
   */

  function Main() {
    console.log(`%c App Started...`, "font-wheight: bold; font-size: 20px;");
    let roll;

    result.innerHTML = "0";
    minRangeValue.innerHTML = min;
    maxRangeValue.innerHTML = max;

    rollButton.addEventListener("click", function(){
      roll = radnomRange(min, max);
      result.innerHTML = roll;
      result.style.fontSize = "20px";
    });

    minRange.addEventListener("input", function () {
        
        min = parseInt(minRange.value);
        max = parseInt(maxRange.value); 
        if (min > max) {
          minRange.value = maxRange.value;
            min = max;
        }      
        minRangeValue.innerHTML = minRange.value;
    });
    maxRange.addEventListener("input", function () {
      max = parseInt(maxRange.value); 
      min = parseInt(minRange.value);
      if (max < min) {
        maxRange.value = minRange.value;
          max = min;
      } 
      maxRangeValue.innerHTML = maxRange.value;  
          
  });
    


  }

  window.addEventListener("load", Start);
})(core || (core = {}));
