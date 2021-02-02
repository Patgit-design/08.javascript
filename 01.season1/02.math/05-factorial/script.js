// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let number = document.getElementById("number").value;
        if (number < 0) {
            alert('Error! Factorial for negative number does not exist.');
        } else if (number === 0) {
            alert(`The factorial of ${number} is 1.`);
        } else {
            let fact = 1;
            for (i = 1; i <= number; i++) {
                fact *= i;
            }
            alert(`The factorial of ${number} is ${fact}.`);
        }

    });

})();