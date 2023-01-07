let objects; // objects namespace or modules

(function (objects) {
    // Create an object of type person
    let Person = (function(){
    
        function Person(name, age){
          this._name = name;
          this._age = age;
        }

        Person.prototype.sayHello = function(){
          console.log(`${this._name} says hello!`);
        }
        return Person;
    })();
    
    objects.Person = Person;
})(objects || (objects = {}));


