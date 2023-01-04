"use strict";

var content = void 0;
(function (content) {

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
        var AboutButton = document.getElementById("AboutButton");
        AboutButton.innerText = "About Us";

        //About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("onmousover", AboutButtonOver);
        AboutButton.addEventListener("onmouseout", AboutButtonOut);
    }
    // attach Homecontent function to the content namespace
    content.HomeContent = HomeContent;
})(content || (content = {}));