// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.getElementById("target");
    let date = new Date().getHours();


    if (date < 14) {
        target.innerHTML = "Hello";
    } else {
        target.innerHTML = "good evening";
    }

})();