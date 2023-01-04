"use strict";

(function (content) {

        function outputFormData() {
                var name = document.getElementById("FullName");

                //  console.log("FULL " + name.value);
                console.log("Full name: " + name.value);
        }

        function ContactContent() {

                document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

                //Create HTML element
                var cancelButton = document.createElement("button");

                // Configure HTML element
                cancelButton.setAttribute("class", "btn btn-warning ");
                cancelButton.textContent = "Cancel";
                cancelButton.addEventListener("click", function (event) {
                        event.preventDefault();
                        window.open("index.html", "_parent");
                });

                // add the HTML element  to page
                document.forms[0].appendChild(cancelButton);

                var SubmitButton = document.getElementById("sendButton");
                SubmitButton.addEventListener("click", function (event) {
                        event.preventDefault();
                        outputFormData();
                });
        }

        content.ContactContent = ContactContent;
})(content || (content = {}));