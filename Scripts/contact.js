((content) => {

    // Local variables

        let name = document.getElementById("FullName");
        let email = document.getElementById("EmailAdress");
        let message = document.getElementById("Message");
        let contact = document.getElementById("ContactNumber");

    function outputFormData() {

        console.log(`Full name: ${name.value}`);
        console.log(`Contact number: ${contact.value}`);
        console.log(`Email: ${email.value}`);
        console.log(`Message: ${message.value}`);
        console.log(`Form lenght: ${document.forms[0].length}`);
        console.log(`Form elements: ${document.forms[0].elements[0]}`);

        for (let index = 0; index < document.forms[0].length; index++) {
            console.log(`%c Element ${index}: ${document.forms[0].elements[index].value}`);
        }
    }

    function clearValidation(){

        name.setCustomValidity(""); 
        email.setCustomValidity("");
        message.setCustomValidity("");
        contact.setCustomValidity("");
    }

   

    function setEventForElements(){
        
        for (const element of document.forms[0].elements) {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) {
                //When user input data
                element.addEventListener("input", function(){
                    element.setCustomValidity("");
                });

                //When user enter incorrect data
                element.addEventListener("invalid", function(){
                    switch(element.id) {
                        case "FullName":
                            element.setCustomValidity("You must enter an appropriate full name");
                            break;
                        case "EmailAdress":
                            element.setCustomValidity("You must enter an appropriate email adress");
                            break;
                        case "Message":
                            element.setCustomValidity("You must enter an appropriate message");
                            break;
                        case "ContactNumber":
                            element.setCustomValidity("You must enter an appropriate contact number");
                            break;
                        default:
                            element.setCustomValidity("This Field is requred");
                    }
                })
            }
            
        }
    }

    function validateForm() {
        setEventForElements();

    }

    function checkRequired(inputArr){
        inputArr.forEach(input => {
            if (input.value.trim() === '') {
                showError(input, `${getFildName(input)} is Requred`);
            }
            console.log(input.value);

        });
    }

    function getFildName(input){
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    let form  = document.form()



    function ContactContent() {

       // clearValidation();
        

        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        //Create HTML element
        let cancelButton = document.createElement("button");

        // Configure HTML element
        cancelButton.setAttribute("class", "btn btn-warning ");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("index.html", "_parent");
        });

        // add the HTML element  to page
        document.forms[0].appendChild(cancelButton);

        let SubmitButton = document.getElementById("sendButton");
        SubmitButton.addEventListener("click", (event) => {
            // event.preventDefault();

            if (!document.forms[0].checkValidity()) {
                outputFormData();
                validateForm();
            }

        });


    }

    // Public functions exposed to the content namespace
    content.ContactContent = ContactContent;


})(content || (content = {}));