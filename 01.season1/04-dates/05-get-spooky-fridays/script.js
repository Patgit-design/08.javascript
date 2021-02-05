// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
    document.getElementById("run").addEventListener("click", () => {

        let year = document.getElementById("year").value;
        // let date = new Date(year, month, day);
        let arr = [];


        for (let month = 1; month <= 12; month++) {
            let date = new Date(year, month, 13);

            if (date.getDay() == 5 && date.getDate() == 13) {

                arr.push(date);

            }



        }
        alert(arr);
        // your code here
    });

})();


// au click
//initialiser la date


//aller chercher l annee input
//lui faire passer en revue chaque mois
// compter le nombre de v13
//les stocker
//les afficher

//ajout d un element dans le calcul