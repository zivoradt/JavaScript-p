let core;

// Core modelu - IIFE
(function (core) {
  // App variables

 let XHR;

 function insertHTML(sourceURL, destTag){

  let target = document.getElementsByTagName(destTag)[0];

  XHR.addEventListener("readystatechange", function(){
    if((XHR.readyState === 4) && (XHR.status === 200)){
      target.innerHTML = XHR.responseText;
    };
  });

  XHR.open("GET", sourceURL);

  XHR.send();
  
 };
  /**
   * THis function is used for initialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-wheight: bold; font-size: 20px;"
    );
   
  XHR = new XMLHttpRequest();
    

    Main();
  };


  /**
   * This function is where the main functionality for the web app is happening
   */

  function Main() {
    console.log(`%c App Started...`, "font-wheight: bold; font-size: 20px;");

insertHTML("/Views/partials/header.html", "header");
insertHTML("/Views/partials/footer.html", "footer");
  
};
  

  window.addEventListener("load", Start);
})(core || (core = {}));
