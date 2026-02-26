import { comparer } from './comparer.js';

export function messageLoto(joueur, tirage) {
    let resultat = comparer(joueur, tirage);

    // Déterminer le message selon le nombre de matchs
    let message = "";

    switch(resultat.matchs) {
        case 0:
            message = "Tu n'as trouvé aucun numéro. Tu es Nul! NUL! NULLL!!";
            break;
        case 1:
            message = "Tu as trouvé 1 numéro, pas ouf !";
            break;
        case 2:
            message = "Tu as trouvé 2 numéros, essaie encore !";
            break;
        case 3:
            message = "Tu as trouvé 3 numéros, peu mieux faire.";
            break;
        case 4:
            message = "Tu as trouvé 4 numéros, tu tiens le bon bout !";
            break;
        case 5:
            message = "Tu as trouvé 5 numéros, encore un petit effort.";
            break;
        case 6:
            message = "JACKPOT, tu as gagné le gros lot !!!";
            break;
        default:
            message = "La grille n'est pas complète.";
    }

    // Affichage dans le DOM
    const messageP = document.querySelector('.messageLoto');
    if (messageP) {
        messageP.textContent = message;
        messageP.style.opacity = '1';
    }

    return message;
}




