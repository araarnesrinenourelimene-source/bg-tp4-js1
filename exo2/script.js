"use strict";

// Déclaration d'un tableau d'étudiants (Slide 39 : Tableaux)
const tabetudiant = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Objet étudiant (Slide 40 : Objets et propriétés)
const objetetudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
};

// Tableau contenant plusieurs objets étudiants (Slide 41 : Tableau d'objets)
const tableauobjetsetudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// Affiche les étudiants un par un (Slide 45 : Boucle for, Slide 39 : length et accès aux éléments d'un tableau)
function f1() {
    for (let i = 0; i < tabetudiant.length; i++) {
        console.log(tabetudiant[i]);
    }
}

// Affiche l'objet étudiant (Slide 40 : Affichage et manipulation des objets)
function f2() {
    console.log(objetetudiant);
}

// Affiche les informations de chaque étudiant (Slide 41 : Tableau d'objets, Slide 45 : Boucle for, Slide 40 : Accès aux propriétés)
function f3() {
    for (let i = 0; i < tableauobjetsetudiants.length; i++) {
        console.log(
            tableauobjetsetudiants[i].nom + "-" +
            tableauobjetsetudiants[i].prenom + "-" +
            tableauobjetsetudiants[i].age
        );
    }
}