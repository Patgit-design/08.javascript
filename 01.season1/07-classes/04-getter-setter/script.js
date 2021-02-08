// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    document.getElementById("run").addEventListener("click", () => {

        class Person {
            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }
            get getName() {
                return this.firstName + " " + this.lastName;
            }
            set SetName(name) {
                name = name.split(" ");
                this.firstName = name[0];
                this.lastName = name[1];
            }
        }

        let person1 = new Person("Masson", "Elise")
        console.log(person1.getName);
        person1.SetName = "Elise Masson";
        console.log(person1.getName);



    })


})();



//Create a class named Person. It will have two properties, firstname and lastname,
// as well as a getter name, which will return "[firstname] [lastname]", 
//and a setter name, which will divide the full name on the basis of a space:
// the first element will be the firstname, the second the lastname.

//When the button is clicked,
// we create an instance of the Person class and display 
//the value of the name inside the console, 
//then assigns a new value to it and displays the state 
//of the instance inside the console at the end of the process.