// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here
    document.getElementById("red").onclick = changeColorR;

    function changeColorR() {
        document.body.style.backgroundColor = "red";
        //return false;
    }
    document.getElementById("green").onclick = changeColorG;

    function changeColorG() {
        document.body.style.backgroundColor = "green";
        //return false;
    }
    document.getElementById("yellow").onclick = changeColorY;

    function changeColorY() {
        document.body.style.backgroundColor = "yellow";
        //return false;
    }
    document.getElementById("blue").onclick = changeColorB;

    function changeColorB() {
        document.body.style.backgroundColor = "blue";
        //return false;
    }
})();