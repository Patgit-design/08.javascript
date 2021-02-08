// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static get greeting() {
            return "hello";
        }

    }

    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name
        }
        static get greeting() {
            return "hello";
        }


    }

    let Minou = new Cat("Minou");
    console.log(Minou.sayHello());
    let rex = new Dog("Rex");
    console.log(rex.sayHello());

    // your code here
})();




//In the script, there is a prewritten class named: Animal.

//From this class, create the two classes, Cat and Dog.
// They will each have two properties, name and greeting 
//(the second property must be static).

//When the button is clicked, 
//create an instance of the Dog class and 
//an instance of the Cat class and display the return value of the sayHello method inside the console .