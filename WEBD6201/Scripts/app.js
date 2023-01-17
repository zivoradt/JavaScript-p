/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak

"use strict";

((core) => {
  /**
   * inject nav bar in header element and highlight active link base on page name
   *
   * @param {string} pageName
   */
  function loadHeader(pageName) {
    console.log(location.pathname);

    // inject the Header

    $.get("/Views/components/header.html", function (data) {
      $("header").html(data); //load navigation bar

      //highlight active link
      $(`#${pageName}`).addClass("active");

      // Loop through every anchor tag in the unorder list and add event listener// handler to allow
      // content injector

      $("a").on("click", function () {
        $(`#${router.ActiveLink}`).removeClass("active"); // removes highliht link
        router.ActiveLink = $(this).attr("id");
        loadContent(router.ActiveLink, ActiveLinkCallback(router.ActiveLink)); // add content to page
        $(`#${router.ActiveLink}`).addClass("active"); // add highlight link

        history.pushState({}, "", router.ActiveLink); // this replace URL in browser
      });

      // make it look like each nav item as an active link
      $("a").on("mouseover", function () {
        $(this).css("cursor", "pointer");
      });
    });

     
  }

  /**
   * Inject page content in main element
   *
   * @param {string}
   * @param {function} callback
   * @returns {void}
   **/
  function loadContent(pageName, callback) {
    // inject the Header

    $.get(`/Views/content/${pageName}.html`, function (data) {
      $("main").html(data);

      callback();
    });

    
  }

  function loadFooter() {
    // inject footer
    $.get("/Views/components/footer.html", function (data) {
      $("footer").html(data);
    });
  }

  function displayHome() {}

  function displayAbout() {}

  function displayProjects() {}

  function displayServices() {}

  function testFullName() {
    let messageArea = $("#messageArea").hide();
    let fullNamePattern =
      /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;

    $("#fullName").on("blur", function () {
      if (!fullNamePattern.test($(this).val())) {
        $(this).trigger("focus").trigger("select");
        messageArea
          .show()
          .addClass("alert alert-danger")
          .text(
            "Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitlalized last name."
          );
      } else {
        messageArea.removeAttr("class").hide();
      }
    });
  }

  function testContactNumber() {
    let messageArea = $("#messageArea");
    let contactNumberPattern =
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    $("#contactNumber").on("blur", function () {
      if (!contactNumberPattern.test($(this).val())) {
        $(this).trigger("focus").trigger("select");
        messageArea
          .show()
          .addClass("alert alert-danger")
          .text(
            "Please enter a valid Contact Number. Country code and area code are both optional"
          );
      } else {
        messageArea.removeAttr("class").hide();
      }
    });
  }

  function testEmailAddress() {
    let messageArea = $("#messageArea");
    let emailAddressPattern =
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

    $("#emailAddress").on("blur", function () {
      if (!emailAddressPattern.test($(this).val())) {
        $(this).trigger("focus").trigger("select");
        messageArea
          .show()
          .addClass("alert alert-danger")
          .text("Please enter a valid Email Address.");
      } else {
        messageArea.removeAttr("class").hide();
      }
    });
  }

  function formValidation() {
    testFullName();
    testContactNumber();
    testEmailAddress();
  }

  function displayContact() {
    // form validation
    formValidation();

    $("#sendButton").on("click", (event) => {
      if ($("#subscribeCheckbox")[0].checked) {
        let contact = new core.Contact(
          fullName.value,
          contactNumber.value,
          emailAddress.value
        );

        if (contact.serialize()) {
          let key = contact.FullName.substring(0, 1) + Date.now();

          localStorage.setItem(key, contact.serialize());
        }
      }
    });
  }

  function displayContactList() {

    authGuard();
    toggleLogin();

    if (localStorage.length > 0) {
      let contactList = document.getElementById("contactList");

      let data = "";

      let keys = Object.keys(localStorage);

      let index = 1;

      for (const key of keys) {
        let contactData = localStorage.getItem(key);

        let contact = new core.Contact();
        contact.deserialize(contactData);

        data += `<tr>
          <th scope="row" class="text-center">${index}</th>
          <td>${contact.FullName}</td>
          <td>${contact.ContactNumber}</td>
          <td>${contact.EmailAddress}</td>
          <td class="text-center"><button value="${key}" class="btn btn-primary btn-sm edit"><i class="fas fa-edit fa-sm"></i> Edit</button></td>
          <td class="text-center"><button value="${key}" class="btn btn-danger btn-sm delete"><i class="fas fa-trash-alt fa-sm"></i> Delete</button></td>
          </tr>`;

        index++;
      }

      contactList.innerHTML = data;

      $("button.edit").on("click", function () {
        location.href = "/edit#" + $(this).val();
      });

      $("button.delete").on("click", function () {
        if (confirm("Are you sure?")) {
          localStorage.removeItem($(this).val());
        }
        location.href = "/contact-list"; // refresh the page
      });

      $("#addButton").on("click", function () {
        location.href = "/edit";
      });
    }
  }

  function displayEdit() {
    let key = location.hash.substring(1);

    let contact = new core.Contact();

    // check to ensure that the key is not empty
    if (key != "") {
      // get contact info from localStorage
      contact.deserialize(localStorage.getItem(key));

      // display contact information in the form
      $("#fullName").val(contact.FullName);
      $("#contactNumber").val(contact.ContactNumber);
      $("#emailAddress").val(contact.EmailAddress);
    } else {
      // modify the page so that it shows "Add Contact" in the header
      $("main>h1").text("Add Contact");
      // modify edit button so that it shows "Add" as well as the appropriate icon
      $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);
    }

    // form validation
    formValidation();

    $("#editButton").on("click", function () {
      // check to see if key is empty
      if (key == "") {
        // create a new key
        key = contact.FullName.substring(0, 1) + Date.now();
      }

      // copy contact info from form to contact object
      contact.FullName = $("#fullName").val();
      contact.ContactNumber = $("#contactNumber").val();
      contact.EmailAddress = $("#emailAddress").val();

      // add the contact info to localStorage
      localStorage.setItem(key, contact.serialize());

      // return to the contact list
      location.href = "/contact-list";
    });

    $("#cancelButton").on("click", function () {
      // return to the contact list
      location.href = "/contact-list";
    });
  }

  function displayLogin() {
    let messageArea = $("#messageArea");
    messageArea.hide();

    $("#loginButton").on("click", function () {
      let username = $("#username");
      let password = $("#password");

      let success = false;

      let newUser = new core.User();

      // use ajax to access the json file
      $.get("./Data/users.json", function (data) {
        // check each user in the users.json file  (linear search)
        for (const user of data.users) {
          if (
            username.val() == user.Username &&
            password.val() == user.Password
          ) {
            newUser.fromJSON(user);
            success = true;
            break;
          }
        }

        // if username and password matches - success... then perform login
        if (success) {
          // add user to session storage
          sessionStorage.setItem("user", newUser.serialize());

          // hide any error message
          messageArea.removeAttr("class").hide();

          

          // redirect user to secure area - contact-list.html
          location.href = "/contact-list";
        } else {
          // display an error message
          username.trigger("focus").trigger("select");
          messageArea
            .show()
            .addClass("alert alert-danger")
            .text("Error: Invalid login information");
        }
      });
    });

    $("#cancelButton").on("click", function () {
      // clear the login form
      document.forms[0].reset();
      // return to the home page
      location.href = "/";
    });
  }

  function displayRegister() {}

  function toggleLogin() {
    if (sessionStorage.getItem("user")) {
      $("#loginListItem").html(
        `<a id = "logout" class="nav-link active" aria-current="page"><i class="fas fa-sign-out-alt"></i> Logout</a>`
      );

      $("#logout").on("click", function () {
        // Perform logout
        sessionStorage.clear();

        // Redirect to login page
        location.href = "/login";
      });

      $(`<li class="nav-item">
        <a  id= "contactListLink" class="nav-link" aria-current="page" href="/contact-list"><i class="fas fa-users fa-lg"></i> Contact List</a>
      </li>`).insertBefore("#loginListItem");
    }
    else {
      $("#loginListItem").html(
        `<a id="login"class="nav-link" aria-current="page" ><i class="fas fa-sign-in-alt"></i> Login</a>`
      );
    }
    $("a").on("mouseover", function () {
      $(this).css("cursor", "pointer");
    });
  }

  function display404Page(){

  }

  function authGuard(){
    if(!sessionStorage.getItem("user"))
    {
    // redirect to the secure area
    location.href = "/login";
    }
  }

  function ActiveLinkCallback(ActiveLink) {
    switch (ActiveLink) {
      case "home":
        return displayHome;

      case "about":
        return displayAbout;

      case "projects":
        return displayProjects;

      case "services":
        return displayServices;

      case "contact":
        return displayContact;

      case "contact-list":
        return displayContactList;

      case "edit":
        return displayEdit;

      case "login":
        return displayLogin;

      case "register":
        return displayRegister;
      case "404":
        return display404Page;
        default:
          console.log("Erorr callback not exist" + activeLink);
    }
  }

  function Start() {
    console.log("App Started...");

    loadHeader(router.ActiveLink);
    loadContent(router.ActiveLink, ActiveLinkCallback(router.ActiveLink));

    loadFooter();

  }

  window.addEventListener("load", Start);

  core.Start = Start;
})(core || (core = {}));
