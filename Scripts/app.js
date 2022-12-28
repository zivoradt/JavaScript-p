/* Custom JS goes here */

// IIFE - Imediately Invoked Funktion Expression

let app = (function () {
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

        let myArray = [
            {name: "Tom", age: 25},
            {name: "zom", age: 26},
            {name: "Tomm", age: 4},
            {name: "Toom", age: 25},
        ];

        myArray.push( {name: "TTTToom", age: 2522});
        myArray.unshift( {name: "Zile ", age: 25})

        let arrayEmpty = (myArray.length > 0) ? false : true;

        let myAssociate = [];

        myAssociate["Name"] = "tom";
        myAssociate["age"] = 30;
        myAssociate["student"] = "P3034";

        console.log(myAssociate);

        for (const key in myAssociate) {
            var item = myAssociate[key];
            console.log(item);
            
        }

        /*
        for(const person of myArray)
        {
            console.log(person.name);
        } */


        /*
        for (const index in myArray) {
            console.log(myArray[index].name);
        } */


        /*
        myArray.forEach(function(person){
            console.log(person.name)
        }); */

        /*
        myArray.forEach(element => {
            console.log(element.name)
        });
        */

        /*
        for (let index = 0; index < myArray.length; index++) {
            console.log(myArray[index].name);
            
        } */

        let content = document.getElementsByClassName("content");
        console.log("Size of array is: " + myArray.length);


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

    return {
        title: document.title
    };
})();