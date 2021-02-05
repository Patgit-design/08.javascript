// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // your code here
    //When you click the button, log in the console if, yes or no, there is an apple in the array fruits.

    document.getElementById("run").addEventListener("click", () => {
        if (fruits.includes("apple") == true) {
            console.log("Yes, there is an apple in the array");
        } else {
            console.log("No apple in the array");
        }
    });

})();