"use strict";

(function (content) {

        function AboutPage() {

                var paragraph = document.getElementById("paragraph");

                var sentence = "We will chnage content";

                paragraph.textContent = sentence;

                var myArray = [{ name: "Tom", age: 25 }, { name: "zom", age: 26 }, { name: "Tomm", age: 4 }, { name: "Toom", age: 25 }];

                myArray.push({ name: "TTTToom", age: 2522 });
                myArray.unshift({ name: "Zile ", age: 25 });

                var myFavoriteThingList = ["Video Games", "Movies", "Cars", "VR"];

                // hook into a ul
                var myFavoriteList = document.getElementById("myFavorite");

                myFavoriteThingList.forEach(function (element) {
                        var newItem = document.createElement("li");
                        newItem.textContent = element;
                        myFavoriteList.appendChild(newItem);
                });

                var arrayEmpty = myArray.length > 0 ? false : true;

                var myAssociate = [];

                myAssociate["Name"] = "tom";
                myAssociate["age"] = 30;
                myAssociate["student"] = "P3034";

                console.log(myAssociate);
        }

        content.AboutContent = AboutPage;
})(content || (content = {}));