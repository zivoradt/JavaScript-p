((content) => {

    function outputFormData(){
         let name = document.getElementById("FullName");
         let email = document.getElementById("EmailAdress");
         let message = document.getElementById("Message");
         let contact = document.getElementById("ContactNumber");
        
        console.log(`Full name: ${name.value}`);
        console.log(`Contact number: ${contact.value}`);
        console.log(`Email: ${email.value}`);
        console.log(`Message: ${message.value}`);
        console.log(`Form lenght: ${document.forms[0].length}`);
        console.log(`Form elements: ${document.forms[0].elements[0]}`);


        for (let index = 0; index < document.forms[0].length; index++) {
            console.log(`%c Element ${index}: ${document.forms[0].elements[index].value}`);
        }
            
        

    };
 





    function ContactContent() {
        

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
        SubmitButton.addEventListener("click", (event)=>{
                event.preventDefault();
                outputFormData();
        });


    }

    content.ContactContent = ContactContent;


})(content || (content = {}));