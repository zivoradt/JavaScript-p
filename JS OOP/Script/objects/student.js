(function(objects){

    class Student extends objects.Person{
        constructor(name, age, studentID){
            super(name, age);
            this._student = studentID;
        }
        studies(){
            console.log(`${this._name} is studying!`);
        }
    }
    objects.Student = Student;
})(objects || (objects = {}));