"use strict";

// Déclaration du tableau des noms des étudiants (Slide 39 : Tableaux)
const tabEtudiant = ["JOHN DOE", "BOB CARLTON", "RAYANE SMITH"];

// Déclaration des matricules et des moyennes (Slide 39 : Tableaux)
const matricules = [1000, 2000, 3000];
const moyenne = [14, 7, 13];

// Fonction B : vérifie si la note est supérieure ou égale à 10 (Slide 46 : Fonctions, Slide 42 : Opérateurs de comparaison)
function B(note) {
    return note >= 10;
}

// Fonction f1 : affiche le résultat de chaque étudiant (Slide 46 : Fonctions, Slide 45 : Boucle for)
function f1() {
    for (let i = 0; i < moyenne.length; i++) {
        if (B(moyenne[i])) {
            console.log(matricules[i] + ": ADMIS");
        } else {
            console.log(matricules[i] + ": AJOURNÉ");
        }
    }
}