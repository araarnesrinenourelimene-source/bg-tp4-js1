"use strict";

// 1. Représenter un produit avec son nom, son prix et sa quantité
// Slide 40 : Types complexes - Les objets

const produit = {
    nom: "Clavier",
    prix: 2500,
    quantite: 10
};

// Calculer et afficher la valeur totale du stock
// Slide 42 : Opérateur de multiplication
const valeurStock = produit.prix * produit.quantite;

console.log("Valeur du stock de " + produit.nom + " : " + valeurStock);


// 2. Constituer un catalogue de 5 produits
// Slide 41 : Tableau d'objets

const catalogue = [
    produit,
    { nom: "Souris", prix: 1200, quantite: 15 },
    { nom: "Ecran", prix: 35000, quantite: 5 },
    { nom: "Casque", prix: 4500, quantite: 8 },
    { nom: "USB", prix: 800, quantite: 20 }
];

// Calculer le prix moyen du catalogue
// Slide 39 : Méthodes utiles des tableaux (reduce)
// Slide 42 : Opérateurs arithmétiques

const prixMoyen = catalogue.reduce((somme, p) => somme + p.prix, 0) / catalogue.length;

console.log("Prix moyen : " + prixMoyen);

// Afficher uniquement les produits dont le prix dépasse le prix moyen
// Slide 39 : Méthodes utiles des tableaux (filter)
// Slide 47 : Fonctions fléchées

const produitsChers = catalogue.filter(p => p.prix > prixMoyen);

console.log("Produits dont le prix dépasse la moyenne :");
console.log(produitsChers);


// 3. Déterminer le nombre total d'articles et la valeur globale du stock
// Slide 39 : Méthodes utiles des tableaux (reduce)
// Slide 42 : Opérateurs arithmétiques

const totalArticles = catalogue.reduce((somme, p) => somme + p.quantite, 0);

const valeurGlobale = catalogue.reduce(
    (somme, p) => somme + (p.prix * p.quantite), 0
);

console.log("Nombre total d'articles : " + totalArticles);
console.log("Valeur globale du stock : " + valeurGlobale);


// 4. Calculer la valeur du stock d'un produit donné
// Slide 46 : Les fonctions

function calculerValeurStock(produit) {
    return produit.prix * produit.quantite;
}

// Vérifier le fonctionnement sur plusieurs produits
console.log("Stock du clavier : " + calculerValeurStock(catalogue[0]));
console.log("Stock de la souris : " + calculerValeurStock(catalogue[1]));
console.log("Stock de l'écran : " + calculerValeurStock(catalogue[2]));


// 5. Appliquer différents traitements à l'ensemble du catalogue
// Slide 48 : Fonctions de rappel (Callbacks)
// Slide 45 : forEach
// Slide 47 : Fonctions fléchées

function appliquerTraitement(callback) {
    catalogue.forEach(callback);
}

// Afficher les noms des produits
console.log("Noms des produits :");

appliquerTraitement(p => console.log(p.nom));

// Afficher les prix des produits
console.log("Prix des produits :");

appliquerTraitement(p => console.log(p.prix));