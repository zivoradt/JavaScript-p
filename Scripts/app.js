// IIFE - Imediately Invoked Funktion Expression
 
let app;
(function (app) {
    "use strict"


    function Start() {

        let title = document.title;

        console.log("The page name is: " + title);

        try {
          
        switch (title) {
            case "Home":
                content.HomeContent();
                break;

            case "About":
                content.AboutContent();
                break;

            case "Contact":
                content.ContactContent();
                break; 
            default:
                throw("Title not defined");
                break;
        }
        }
        catch {
            console.warn("Something get wrong");
        }
    }



    window.addEventListener("load", Start);

   app.Title = document.title;
   
   app.Img = document.getElementsByTagName("img")[0];

})(app || (app = {}));