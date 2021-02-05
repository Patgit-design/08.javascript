// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        console.log(Object.keys(person));
        console.log(Object.values(person));
    });

})();
//Clicking on the button, 
//display inside the console,
// a list of the object's keys from person. 
//Then, also displays the list of values for the same object.