// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here


    //Au clic sur le bouton, 
    //affiche dans la balise prévue un nom d'oiseau généré aléatoirement à partir des données du script.

    //Chaque nom est associé à une propriété qui vous permet de savoir si vous 
    //devez accorder l'adjectif (ajoutez un "e" en fin de mot).

    //Examples de résultat : La mouette chantante ou Le corbeau huppé.
    document.getElementById("run").addEventListener("click", () => {

        let target = document.getElementById("target");
        const random = Math.floor(Math.random() * birds.length);
        target.innerHTML = random.element.name;


        console.log(random, [random]);


    });
})();