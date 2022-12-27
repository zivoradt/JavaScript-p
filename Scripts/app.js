/* Custom JS goes here */

// IIFE - Imediately Invoked Funktion Expression

(function () {
    "use strict"

    // About event hendler
    function AboutButtonClick() {
        console.log("About Button clicked");
    }
    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {
        let AboutButton = document.getElementById("AboutButton");
        AboutButton.innerText = "About Us";

        //About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("onmousover", AboutButtonOver);
        AboutButton.addEventListener("onmouseout", AboutButtonOut);
    }

    function ReturnPi() {
        return Math.PI;
    }

    function AboutPage() {
        let number = ReturnPi();
        console.log("This is a PI: " + number);

        let paragraph = document.getElementById("paragraph");

        let sentence = "We will chnage content";

        paragraph.textContent = sentence;

    }


    function Start() {

        let title = document.title;

        console.log("The page name is: " + title);

        switch (title) {
            case "Home":
                HomeContent();
                break;

            case "About":
                AboutPage();
            default:
                break;
        };
    }

    window.addEventListener("load", Start);


})();