// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let target = document.getElementById("target");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    console.log(date);


    if (hours <= 17 && minutes <= 30) {
        target.innerHTML = "Hello";
    } else {
        target.innerHTML = "good evening";
    }

})();