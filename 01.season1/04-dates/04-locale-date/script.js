// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    let date = new Date();
    let format = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' };
    document.getElementById("target").innerHTML = date.toLocaleDateString('en-GB', format) + ", " + date.getHours() + "h" + date.getMinutes();

    // document.getElementById("target").innerHTML = date.new Intl.DateTimeFormat('en-GB', options).format(date);



})();


//aller cibler target
//definir une date en anglais
//changer son contenu en date