// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {
    document.getElementById("run").addEventListener("click", () => {

        let year = document.getElementById("dob-year").value;
        let month = document.getElementById("dob-month").value;
        let day = document.getElementById("dob-day").value;
        let date = new Date();
        let age = date.getFullYear() - year;

        if (month > date.getMonth() + 1) {
            age = age - 1;
        } else if (month < date.getMonth() + 1) {
            age = age;
        } else if (month == date.getMonth() + 1) {
            if (day <= date.getDate()) {
                age = age;
            } else {
                age = age - 1;
            }
        }
        alert("You are: " + age + " years old");
    });
})();

//creer la date du jour
// recuperer la date entree
//difference entre les deux dates