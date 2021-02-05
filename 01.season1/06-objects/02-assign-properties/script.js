//06-objects/02-assign-properties/script.js - 6.2: assign properties


(() => {
    const computers = [
        { id: "0001", available: false, user: "leny", os: "macOS" },
        { id: "0002", available: false, user: "Nicolas" },
        { id: "0003" },
        { id: "0004", os: "Windows" },
        { id: "0005" },
        { id: "0006", os: "macOS" },
        { id: "0007" },
        { id: "0008" },
        { id: "0009", available: false, user: "Anthony" },
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here
    // console.table(computers);
    document.getElementById("run").addEventListener("click", () => {
        computers.forEach((item) => {

            if (item.hasOwnProperty("available") == false) {
                item.available = defaultProps.available;
            }
            if (item.hasOwnProperty("os") == false) {
                item.os = defaultProps.os;
            }
            if (item.hasOwnProperty("user") == false) {
                item.user = defaultProps.user;
            }

            console.table(item);
        })
    });

})();





//In the script, I have an array computers, which makes an inventory of the computers of a class,
// unfortunately, this inventory is incomplete. So I created the object defaultProps,
// which contains the necessary properties and their default values.

//When you click on the button,
// display in the console the contents of the table computers,
// with, for each element, all the necessary properties. 
//Attention : if an element already has a value for a property, do not overwrite it with the default value!