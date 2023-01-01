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
        

        let paragraph = document.getElementById("paragraph");

        let sentence = "We will chnage content";

        paragraph.textContent = sentence;

        let myArray = [
            { name: "Tom", age: 25 },
            { name: "zom", age: 26 },
            { name: "Tomm", age: 4 },
            { name: "Toom", age: 25 },
        ];

        myArray.push({ name: "TTTToom", age: 2522 });
        myArray.unshift({ name: "Zile ", age: 25 });

       

        let myFavoriteThingList = [
            "Video Games",
            "Movies",
            "Cars",
            "VR"
        ]

        // hook into a ul
        let myFavoriteList = document.getElementById("myFavorite");

        myFavoriteThingList.forEach(element => {
            let newItem = document.createElement("li");
            newItem.textContent = element;
            myFavoriteList.appendChild(newItem);

        });




        let arrayEmpty = (myArray.length > 0) ? false : true;

        let myAssociate = [];

        myAssociate["Name"] = "tom";
        myAssociate["age"] = 30;
        myAssociate["student"] = "P3034";

        console.log(myAssociate);

        


    }

    function ContactContent() {

    }


    function Start() {

        let title = document.title;

        console.log("The page name is: " + title);

        try {
          
        switch (title) {
            case "Home":
                HomeContent();
                break;

            case "About":
                AboutPage();
                break;

            case "Contact":
                ContactContent();
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

    return {
        title: document.title
    };
})();