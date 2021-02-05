// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here

    //When you click the button, 
    //display the ten elements of an array of 10 numbers (between 1 and 100) in the table.




    document.getElementById("run").addEventListener("click", () => {

        let a = []

        for (i = 0; i < 10; i++) {
            a.push(Math.floor(Math.random() * 100))
        }
        console.log(a)
        console.log(Math.min(...a));
        console.log(Math.max(...a));

        let somme = a.reduce((b, c) => {
            return b + c;
        })

        console.log(somme) //?????Then display in the definition list: the smallest number, the biggest number, the sum of all numbers, and their average.


        let average = somme / a.length

        console.log(average)


    });
})();