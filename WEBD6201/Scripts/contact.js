"use strict";
// Contact Class


((core)=>{

  class Contact {
    // getters and setters
    get FullName() 
    {
      return this.m_fullName;
    }
  
    set FullName(value) 
    {
      this.m_fullName = value;
    }
  
    get ContactNumber() 
    {
      return this.m_contactNumber;
    }
  
    set ContactNumber(value) 
    {
      this.m_contactNumber = value;
    }
  
    get EmailAddress() 
    {
      return this.m_emailAddress;
    }
  
    set EmailAddress(value) 
    {
      this.m_emailAddress = value;
    }
  
    // constructor

    /**
     * @param {string} fullName 
     * @param {string} contactNumber 
     * @param {string} emailAddress 
     */
    constructor(fullName = "", contactNumber = "", emailAddress = "") 
    {
      this.FullName = fullName;
      this.ContactNumber = contactNumber;
      this.EmailAddress = emailAddress;
    }

    // methods

    /**
     * This method overrides the built-in toString method for the Contact class
     *
     * @returns {string}
     */
    toString() 
    {
      return `Full Name     : ${this.FullName} \nContact Number: ${this.ContactNumber}\nEmail Address : ${this.EmailAddress}`;
    }
    /**
     * This metod returns a JSON object made of the properties of the Contact class
     *
     * @return {Object} 
     */
    toJSON(){
      return {
        "fullName": this.FullName,
        "cotactNumber": this.ContactNumber,
        "emailAddress": this.EmailAddress
      }

    }
    /**
     *  This metod convert Contat to comma-separated value string
     *
     * @return {string} 
     */
    serialize(){

      if (this.FullName!== "" && this.ContactNumber !== "" && this.EmailAddress !== "") {

      return `${this.FullName},${this.ContactNumber},${this.EmailAddress}`; 
      }
      else {
        console.log("Contact is empty");
        return null;
      }
    }
    /**
     * This method takes a comma-separated data string and assigns the values to the Contact class paramaters
     *
     * @param {string} data
     * @return {void}
     */
    deserialaze(data){

      let propertyArray = data.split(",");
      this.FullName = propertyArray[0];
      this.ContactNumber = propertyArray[1];
      this.EmailAddress = propertyArray[2];

    }
  }
  core.Contact = Contact;

})(core || (core = {}));
