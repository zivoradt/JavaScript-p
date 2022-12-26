 /* Custom JS goes here */

 // IIFE - Imediately Invoked Funktion Expression
 
 (function(){


    function Start()
    {
        //local variable
        let title = document.title;

        switch (title) {
            case "Home":
                let AboutButton = document.getElementById("AboutButton");

        AboutButton.addEventListener("click", function(){
            console.log("ABout Button was clicked");
        });
                
                break;
        
            default:
                break;
        }

        console.log("Title: " + title); 
    }

    window.onload = Start;


 })();