// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    // your code here

    //click the button,
    document.getElementById("run").addEventListener("click", () => {
            // Set fruits : remove the "apple" and the "cherry",
            fruits.delete("apple");
            fruits.delete("cherry");
            fruits.add("banana").add("kiwi");
            console.log(fruits);
        }

        // add a "banana" and a "kiwi".

        //Finally, display the Set's result in the console.
    );
})();