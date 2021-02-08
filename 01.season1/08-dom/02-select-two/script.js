// 08-dom/02-select-two/script.js - 8.2: select by css selector


(() => {


    let x = document.getElementsByTagName("p");

    for (i = 0; i < x.length; i++) {

        if (x[i].className == "target") {
            x[i].innerHTML = "owned";
        }
    }


})();

//Select the element with the id "target" (not using getElementById!) 
//and replace its content with "owned".