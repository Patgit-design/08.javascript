// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let opOne = +(document.getElementById("op-one")).value;
        let opTwo = +(document.getElementById("op-two")).value;
        // perform the operation
        switch (operation) {
            case "addition":
                let rsltA = opOne + opTwo;
                alert(rsltA);
                break;
            case "substraction":
                let rsltB = opOne - opTwo;
                alert(rsltB);
                break;
            case "multiplication":
                let rsltC = opOne * opTwo;
                alert(rsltC);
                break;
            case "division":
                let rsltD = opOne / opTwo;
                alert(rsltD);
                break;
            default:
                alert("Verify operation");
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();