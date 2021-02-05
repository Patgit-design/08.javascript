// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    // When you click on the button,
    // displays in the console an object that introduces you and
    // contains the following properties lastname, firstname, age, city, country.
    /*   document.getElementById("run").addEventListener("click", () => {

        console.dir({ hello: "🌎", Iam: "Patricia C.", Iam: "45 years old", Ilivein: "Namur", in: "Belgium" });

    });
})();*/

    document.getElementById("run").addEventListener("click", () => {
        let me = {
            lastName: "Patricia",
            firstName: "Corduant",
            age: 45,
            city: "Namur",
            country: "Belgium"
        }
        console.log(me);
    });
})();