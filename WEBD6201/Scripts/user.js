"use strict";
// User Class


((core)=>{

  class User {
    // getters and setters
    get DisplayName() 
    {
      return this.m_displayName;
    }
  
    set DisplayName(value) 
    {
      this.m_displayName = value;
    }
  
    get EmailAddress() 
    {
      return this.m_emailAddress;
    }
  
    set EmailAddress(value) 
    {
      this.m_emailAddress = value;
    }
    get UserName() 
    {
      return this.m_userName;
    }
  
    set UserName(value) 
    {
      this.m_userName = value;
    }
    get Password() 
    {
      return this.m_password;
    }
  
    set Password(value) 
    {
      this.m_password = value;
    }
  
    // constructor

    /**
     * Creates an instance of User.
     * @param {string} [DisplayName=""]
     * @param {string} [emailAddress=""]
     * @param {string} [userName=""]
     * @param {string} [password=""]
     * @memberof User
     */
    constructor(displayName = "", emailAddress = "", userName = "", password = "") 
    {
      this.DisplayName = displayName;
      this.EmailAddress = emailAddress;
      this.UserName = userName;
      this.Password = password;
    }

    // methods

    /**
     * This method overrides the built-in toString method for the Contact class
     *
     * @returns {string}
     */
    toString() 
    {
      return `Display Name     : ${this.DisplayName} \nEmail Address: ${this.EmailAddress}\nUser Name : ${this.UserName}`;
    }
    /**
     * This metod returns a JSON object made of the properties of the Contact class
     *
     * @return {Object} 
     */
    toJSON(){ 
      return {
        "DisplayName": this.DisplayName,
        "EmailAddress": this.EmailAddress,
        "UserName": this.UserName
      }
    }
    /**
     * This metod takes JSON object and assig it to User object properties
     *
     * @param {Object} data
     */
    fromJSON(data){
      this.DisplayName = data.DisplayName;
      this.EmailAddress = data.EmailAddress;
      this.UserName = data.UserName;
      this.Password = data.Password;
    }
    /**
     *  This metod convert User to comma-separated value string
     *
     * @return {string} 
     */
    serialize(){

      if (this.DisplayName!== "" && this.EmailAddress !== "" && this.UserName !== "") {

      return `${this.DisplayName},${this.EmailAddress},${this.UserName}`; 
      }
      else {
        console.log("One of the properties is empty!");
        return null;
      }
    }
    /**
     * This method takes a comma-separated data string and assigns the values to the User class paramaters
     *
     * @param {string} data
     * @return {void}
     */
    deserialaze(data){

      let propertyArray = data.split(",");
      this.DisplayName = propertyArray[0];
      this.EmailAddress = propertyArray[1];
      this.UserName = propertyArray[2];

    }
  }
  core.User = User;

})(core || (core = {}));
