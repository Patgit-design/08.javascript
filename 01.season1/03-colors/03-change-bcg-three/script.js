// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {
    let setBg = () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        color.innerHTML = "#" + randomColor;
    }

    run.addEventListener("click", setBg);
    //setBg(); pas d execution à l ouverture de la page
    // your code here

})();