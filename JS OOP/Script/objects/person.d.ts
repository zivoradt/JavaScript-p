declare module objects {
    export class Person {
        /**
         * Creates an instance of Person.
         * @param {string} name
         * @param {number} age
         * @memberof Person
         */
        constructor(name: string, age: number);

        /**
         * This metod outputs _name and says HELLO!
         * @retunrs {void}
         *
         * @memberof Person
         */
        sayHello():void;
    }
}