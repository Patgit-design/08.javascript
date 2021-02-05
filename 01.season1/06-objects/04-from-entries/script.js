// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        let obj = Object.fromEntries(keys);
        let val = Object.fromEntries(values);
        console.log(obj, val);
    });

})();


//When the button is clicked, 
//display in the console 
//the keys and values from an object created by using the arrays .