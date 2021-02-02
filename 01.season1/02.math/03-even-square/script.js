// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        /*let numberArray = [];
        for (let i = 1; i <= 21; i++) {
            numberArray.push(arr[i] * arr[i]);

        }
        if (i * i === i);
        // numberArray[++];

        alert numberArray;*/

        let numberArray = [];

        for (let i = 1; i <= 21; i++) {
            let j = i * i;
            numberArray.push(j);
        }


        alert(numberArray);





    });

})();