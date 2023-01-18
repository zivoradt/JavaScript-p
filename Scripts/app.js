"use strict";
var core;
(function (core) {
    function loadHeader(pageName) {
        console.log(location.pathname);
        $.get("./Views/components/header.html", function (data) {
            $("header").html(data);
            $(`#${pageName}`).addClass("active");
            $("a").on("click", function () {
                $(`#${router.ActiveLink}`).removeClass("active");
                router.ActiveLink = $(this).attr("id");
                loadContent(router.ActiveLink, ActiveLinkCallback(router.ActiveLink));
                $(`#${router.ActiveLink}`).addClass("active");
                history.pushState({}, "", router.ActiveLink);
            });
            $("a").on("mouseover", function () {
                $(this).css("cursor", "pointer");
            });
        });
    }
    function loadContent(pageName, callback) {
        $.get(`./Views/content/${pageName}.html`, function (data) {
            $("main").html(data);
            callback();
        });
    }
    function loadFooter() {
        $.get("./Views/components/footer.html", function (data) {
            $("footer").html(data);
        });
    }
    function displayHome() { }
    function displayAbout() { }
    function displayProjects() { }
    function displayServices() { }
    function testFullName() {
        let messageArea = $("#messageArea").hide();
        let fullNamePattern = /([A-Z][a-z]{1,25})+(\s|,|-)([A-Z][a-z]{1,25})+(\s|,|-)*/;
        $("#fullName").on("blur", function () {
            if (!fullNamePattern.test($(this).val().toString())) {
                $(this).trigger("focus").trigger("select");
                messageArea
                    .show()
                    .addClass("alert alert-danger")
                    .text("Please enter a valid Full Name. This must include at least a Capitalized first name followed by a Capitlalized last name.");
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }
    function testContactNumber() {
        let messageArea = $("#messageArea");
        let contactNumberPattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        $("#contactNumber").on("blur", function () {
            if (!contactNumberPattern.test($(this).val().toString())) {
                $(this).trigger("focus").trigger("select");
                messageArea
                    .show()
                    .addClass("alert alert-danger")
                    .text("Please enter a valid Contact Number. Country code and area code are both optional");
            }
            else {
                messageArea.removeAttr("class").hide();
            }
        });
    }
    function testEmailAddress() {
        let messageArea = $("#messageArea");
        let emailAddressPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
        $("#emailAddress").on("blur", function () {
            if (!emailAddressPattern.test($(this).val().toString())) {
                $(this).trigger("focus").trigger("select");
                messageArea
                    .show()
                    .addClass("alert alert-danger")
                    .text("Please enter a valid Email Address.");
            }
            else {
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
        formValidation();
        $("#sendButton").on("click", (event) => {
            let fullName = $("#fullName")[0];
            let contactNumber = $("#contactNumber")[0];
            let emailAddress = $("#emailAddress")[0];
            let subscribeCheckbox = $("#subscribeCheckbox")[0];
            if (subscribeCheckbox.checked) {
                let contact = new core.Contact(fullName.value, contactNumber.value, emailAddress.value);
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
                    localStorage.removeItem($(this).val().toString());
                }
                location.href = "/contact-list";
            });
            $("#addButton").on("click", function () {
                location.href = "/edit";
            });
        }
    }
    function displayEdit() {
        let key = location.hash.substring(1);
        let contact = new core.Contact();
        if (key != "") {
            contact.deserialize(localStorage.getItem(key));
            $("#fullName").val(contact.FullName);
            $("#contactNumber").val(contact.ContactNumber);
            $("#emailAddress").val(contact.EmailAddress);
        }
        else {
            $("main>h1").text("Add Contact");
            $("#editButton").html(`<i class="fas fa-plus-circle fa-lg"></i> Add`);
        }
        formValidation();
        $("#editButton").on("click", function () {
            if (key == "") {
                key = contact.FullName.substring(0, 1) + Date.now();
            }
            contact.FullName = $("#fullName").val().toString();
            contact.ContactNumber = $("#contactNumber").val().toString();
            contact.EmailAddress = $("#emailAddress").val().toString();
            localStorage.setItem(key, contact.serialize());
            location.href = "/contact-list";
        });
        $("#cancelButton").on("click", function () {
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
            $.get("./Data/users.json", function (data) {
                for (const user of data.users) {
                    if (username.val() == user.Username &&
                        password.val() == user.Password) {
                        newUser.fromJSON(user);
                        success = true;
                        break;
                    }
                }
                if (success) {
                    sessionStorage.setItem("user", newUser.serialize());
                    messageArea.removeAttr("class").hide();
                    location.href = "/contact-list";
                }
                else {
                    username.trigger("focus").trigger("select");
                    messageArea
                        .show()
                        .addClass("alert alert-danger")
                        .text("Error: Invalid login information");
                }
            });
        });
        $("#cancelButton").on("click", function () {
            document.forms[0].reset();
            location.href = "/";
        });
    }
    function displayRegister() { }
    function toggleLogin() {
        if (sessionStorage.getItem("user")) {
            $("#loginListItem").html(`<a id = "logout" class="nav-link active" aria-current="page"><i class="fas fa-sign-out-alt"></i> Logout</a>`);
            $("#logout").on("click", function () {
                sessionStorage.clear();
                location.href = "/login";
            });
            $(`<li class="nav-item">
        <a  id= "contactListLink" class="nav-link" aria-current="page" href="/contact-list"><i class="fas fa-users fa-lg"></i> Contact List</a>
      </li>`).insertBefore("#loginListItem");
        }
        else {
            $("#loginListItem").html(`<a id="login"class="nav-link" aria-current="page" ><i class="fas fa-sign-in-alt"></i> Login</a>`);
        }
        $("a").on("mouseover", function () {
            $(this).css("cursor", "pointer");
        });
    }
    function display404Page() {
    }
    function authGuard() {
        if (!sessionStorage.getItem("user")) {
            location.href = "/login";
        }
    }
    function ActiveLinkCallback(activeLink) {
        switch (activeLink) {
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
})(core || (core = {}));
//# sourceMappingURL=app.js.map