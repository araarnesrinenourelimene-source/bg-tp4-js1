
"use strict";

const tabEtudiant = ["JOHN DOE", "BOB CARLTON", "RAYANE SMITH"];
const matricules = [1000, 2000, 3000];
const moyenne = [14, 7, 13];

function B(note) {
    return note >= 10;
}

function f1() {
    for (let i = 0; i < moyenne.length; i++) {
        if (B(moyenne[i])) {
            console.log(matricules[i] + ": ADMIS");
        } else {
            console.log(matricules[i] + ": AJOURNÉ");
        }
    }
}
