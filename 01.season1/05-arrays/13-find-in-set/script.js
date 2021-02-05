// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
            console.log(people.size);
            console.log(people.has("Alexandre"));
        }


        //When you click the button,
        // display (in the console) the number of the people in the Set people.
        // Next, show if Alexandre is part of the Set.

    );
})();