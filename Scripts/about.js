(function (content) {

    


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

    content.AboutContent = AboutPage;

})(content || (content = {}));