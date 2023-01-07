let core;

// Core modelu - IIFE
(function (core) {
  // App variables
  let person;
  let student;

  /* OLD WAY
  let Student = (function() {
      function Student(name, age, studentID){
          objects.Person.call(this, name, age)
          this._ID = studentID
      }

      //  Extent or inherit from Person class
      Student.prototype = Object.create(objects.Person);

      Student.prototype.sayHello = objects.Person.sayHello;

      Student.prototype.studies  = function(){
        console.log(`${this._name} is styding`);
    }

      return Student;
  })(); */






  /**
   * THis function is used for initialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-wheight: bold; font-size: 20px;"
    );

    person = new objects.Person("zivorad", 28);

    student = new objects.Student("Milos", 29, 4453);

    // myObject = {}; // object literal notation
    // myObject = new Object(); // Constructor notation

    /* Property definition
        myObject.name = "";
        myObject.age = 5;
        */
    /*
        // PUBLIC PROPERTIES
        Object.defineProperty(myObject, "name", {
            configurable: false,
            enumerable: false, 
            get: function() { return this._name;},
            set: function(newValue) { this._name = newValue;} 

        });

        Object.defineProperty(myObject, "age", {
            configurable: false,
            enumerable: false, 
            get: function() { return this._age;},
            set: function(newValue) { this._age = newValue;} 

        });

        // PRIVATE PROPERTIES
        Object.defineProperty(myObject, "_name", {
            configurable: false,
            enumerable: false, 
            value: "",
            writable: true

        });

        Object.defineProperty(myObject, "_age", {
            configurable: false,
            enumerable: false, 
            value: 0,
            writable: true

        });*/

    Main();
  }

  /**
   * This function is where the main functionality for the web app is happening
   */

  function Main() {
    console.log(`%c App Started...`, "font-wheight: bold; font-size: 20px;");

    console.log(student);
    console.log(person);

    person.sayHello();

    student.studies();
    student.sayHello();
  }

  window.addEventListener("load", Start);
})(core || (core = {}));
