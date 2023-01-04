(function (content) {

    function ContactContent() {
        

        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        //Create HTML element
        let cancelButton = document.createElement("button");

        // Configure HTML element
        cancelButton.setAttribute("class", "btn btn-warning ");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            // window.open("index.html", "_parent");
        });

        // add the HTML element  to page
        document.forms[0].appendChild(cancelButton);

        // Use the history to wipe out the URL
        history.pushState("", "", "/contact")

        history.back

        // Use location to show my path
        console.log(location.pathname);

        console.log("User agent: " + navigator.userAgent);

        

        

        let form = document.getElementById('form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let username = document.getElementById('FullName').value;
            let formData = {
                username: username,
            };
            console.log(formData.username);
        });

    }

    content.ContactContent = ContactContent;


})(content || (content = {}));