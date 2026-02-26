
// ===== COMPARER GRILLE JOUEUR ET TIRAGE =====
export function comparer(joueur, tirage) {
    const { chiffres: chiffresJoueur, etoile: etoileJoueur } = joueur;
    const { tirageNombres, etoile: etoileTirage } = tirage;

    // Comparer les chiffres
    let matchs = 0;
    chiffresJoueur.forEach(chiffre => {
        if (tirageNombres.includes(chiffre)) matchs++;
    });

    // Comparer l'étoile
    let etoileOK = (etoileJoueur === etoileTirage);

    return { matchs, etoileOK, tirageNombres, etoileTirage };
}


