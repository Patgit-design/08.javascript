// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", () => {

        fruits.shift(); // supprime Apple (au début)
        fruits.pop();
        fruits.unshift('Banana');
        fruits.push('Kiwi');


        alert(fruits);



        // your code here
        //click
        //remove 1st et last
        //add banana at the start
        //add kiwi at the end
        //afficher le tableau

    })();
})();