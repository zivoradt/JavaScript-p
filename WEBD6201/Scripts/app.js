/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

//const { Button } = require("bootstrap");



((core)=>
{
    function displayHome()
    {



        let paragraphOneText =
          "This is a simple site to demonstrate DOM Manipulation for ICE 1";

        let paragraphOneElement = document.getElementById("paragraphOne");

        paragraphOneElement.textContent = paragraphOneText;
        paragraphOneElement.className = "fs-5";

        // Step 1. document.createElement
        let newParagraph = document.createElement("p");
        // Step 2. configure the element
        newParagraph.setAttribute("id", "paragraphTwo");
        newParagraph.textContent = "...And this is paragraph two";
        // Step 3. select the parent element
        let mainContent = document.getElementsByTagName("main")[0];
        // Step 4. Add / Insert the element
        mainContent.appendChild(newParagraph);

        newParagraph.className = "fs-6";

        // another way of injecting content
        let paragraphDiv = document.createElement("div");
        let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        paragraphDiv.innerHTML = paragraphThree;

        // insertions

        // example of inserting before a node
        //newParagraph.before(paragraphDiv);

        // example of inserting after a node
        newParagraph.after(paragraphDiv);

        // deletions

        // example of removing a single element
        //paragraphOneElement.remove();

        // example of removeChild
        mainContent.removeChild(paragraphOneElement);

        // update / modification
        //mainContent.firstElementChild.textContent = "Welcome Home!";

        mainContent.innerHTML = `<h1 id="firstHeading">Welcome to WEBD6201 - Lab 1</h1>
         <p id="paragraphOne" class="fs-3 fw-bold">This is my first Paragraph</p>
        `;
        
    }

    function displayAbout()
    {

    }

    function displayProjects()
    {

    }

    function displayServices()
    {

    }

    function testFullName(){
      let messageAre = $("#messageArea").hide();

      let fullNamePatter = /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;

      // form validation

      $("#fullName").on("blur", function(){

        if(!fullNamePatter.test($(this).val()))
        {
            $(this).trigger("focus").trigger("select");

            messageAre.show().addClass("alert alert-danger").text("Please enter an appropriate first Name with Big");
        }
        else
        {
          messageAre.removeAttr("class").hide();
        }
      });
    }


    function testContactNumber(){

      let messageAre = $("#messageArea")

      let contactNumber = /^(\+zd{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

      // form validation

      $("#contactNumber").on("blur", function(){

        if(!contactNumber.test($(this).val()))
        {
            $(this).trigger("focus").trigger("select");

            messageAre.show().addClass("alert alert-danger").text("Please enter an appropriate Contact Number");
        }
        else
        {
          messageAre.removeAttr("class").hide();
        }
      });
    }

    function testEmailAddress(){
      let messageAre = $("#messageArea")

      let emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

      // form validation

      $("#emailAddress").on("blur", function(){

        if(!emailCheck.test($(this).val()))
        {
            $(this).trigger("focus").trigger("select");

            messageAre.show().addClass("alert alert-danger").text("Please enter an appropriate Email addres");
        }
        else
        {
          messageAre.removeAttr("class").hide();
        }
      });
    }

    function formValidation(){
      testFullName();
      testContactNumber();
      testEmailAddress();
    }

    function displayContact()
    {

      formValidation();


        let messageAre = $("#messageArea").hide();

        let fullNamePatter = /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;

        // form validation

        

        $("#fullName").on("blur", function(){

          if(!fullNamePatter.test($(this).val()))
          {
              $(this).trigger("focus").trigger("select");

              messageAre.show().addClass("alert alert-danger").text("Please enter an appropriate Name");
          }
          else
          {
            messageAre.removeAttr("class").hide();
          }
        });

         
        
        $("#sendButton").on("click", ()=>{

          if ($("#subscribeCheck")[0].checked) {
              let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);

              if (contact.serialize()) {
                let key = contact.FullName.substring(0,1)+ Date.now();
                localStorage.setItem(key, contact.serialize());
              }
            
          }

        });
        
        sendButton.addEventListener("click", function(event){
            event.preventDefault();
            
            
            
            
                      
            
        });
    }

    function displayContactList(){


      if (localStorage.length > 0) {

        let contactList = document.getElementById("contactList");

        let data = "";

        let keys = Object.keys(localStorage);

        let index = 1;

        for (const key of keys) {
          
          let contacData = localStorage.getItem(key);

           let contact = new core.Contact();

           contact.deserialaze(contacData);

           data += 
                  `<tr>
                  <th scope="col">${index}</th>
                  <td scope="col">${contact.FullName}</td>
                  <td scope="col">${contact.ContactNumber}</td>
                  <td scope="col">${contact.EmailAddress}</td>
                  <td class= "text-center"><button value = "${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i>Edit</button></td>
                  <td class= "text-center"><button value = "${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i>Delete</button></td>
                  </tr>`;
          index++;
        };

        contactList.innerHTML =  data;


        $("button.edit").on("click", function(){
          location.href = "edit.html#" + $(this).val();
        })
        $("button.delete").on("click", function(){
          if (confirm("Do you want to delete it?")) {
            localStorage.removeItem($(this).val());
          
          }
          location.href = "contact-list.html";
        });

        $("#addButton").on("click", function(){
          location.href = "edit.html";
        })
        
      }
    }

    function displayEdit(){

      let key = location.hash.substring(1);

      let contact = new core.Contact();

      if (key != "") {
        contact.deserialaze(localStorage.getItem(key))
      

      $("#fullName").val(contact.FullName);
      $("#contactNumber").val(contact.ContactNumber);
      $("#emailAddress").val(contact.EmailAddress);

      }
      else {
            // Modifie contact list to show different header and button when key is empty
            if (key == "") {
              $("main>h1").text("Add contact");
              $("#editButton").text("Add");
            }
      }

      formValidation();
      $("#editButton").on("click", function(){

        if (document.forms[0].checkValidity()) {
          if (key == "") {
            key = contact.FullName.substring(0,1)+ Date.now();
          }

          contact.FullName = $("#fullName").val();
          contact.ContactNumber = $("#contactNumber").val();
          contact.EmailAddress = $("#emailAddress").val();

          

          localStorage.setItem(key, contact.serialize());
          location.href = "contact-list.html";
          
        }
          

      })

      $("#cancelButton").on("click", function(){
        location.href = "contact-list.html";
      });

       

    }

    function displayRegister(){


    }
    function displayLogin(){


    }
     

    function Start()
    {
        console.log("App Started...");

         

        switch (document.title) 
        {
          case "Home":
              displayHome();
            break;
          case "About":
              displayAbout();
            break;
          case "Projects":
              displayProjects();
            break;
          case "Services":
              displayServices();
            break;
          case "Contact":
              displayContact();
            break;
          case "Contact-List":
            displayContactList();
            case "Edit":
            displayEdit();
            case "Login":
            displayLogin();
            case "Register":
            displayRegister();
          break;
        }
        
    }

    window.addEventListener("load", Start);

    core.Start = Start;

})(core || (core = {}));