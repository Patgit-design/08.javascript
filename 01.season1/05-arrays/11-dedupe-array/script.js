// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    // click
    //enlever les doublons
    //display les resultats

    document.getElementById("run").addEventListener("click", () => {
            const uniqueSet = new Set(fruits);
            const backToArray = [...uniqueSet];
            console.log(uniqueSet);
        }

    );
})();