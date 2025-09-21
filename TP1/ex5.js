const livre = {
    titre: "Les Misérables",
    auteur: "Victor Hugo",
    annee: 1862,
    getInfo: function() {
        return `${this.titre} a été écrit par ${this.auteur} en ${this.annee}.`;
    }
};
console.log(livre.getInfo());
