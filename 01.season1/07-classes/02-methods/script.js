//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }


        sayHello() {


            return "Hello" + this.firstName + " " + this.lastName;
        }
    }


    document.getElementById("run").addEventListener("click", () => {
        let user = new Person("Patricia", "Corduant");
        console.log(user.sayHello());
    });

})();






//Create a Person class.
//It will have two properties, firstname and lastname, 
//and method sayHello, which will return "Hello, [firstname] [lastname]!".

//When the button is clicked, 
//create an instance of the Person class
// and return the value of the sayHello method inside the console.