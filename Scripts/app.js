 /* Custom JS goes here */

 // IIFE - Imediately Invoked Funktion Expression
 
 (function(){


    function Start()
    {
        //local variable
        var title = document.title;
        console.log("Title: " + title); 
    }

    window.onload = Start;


 })();