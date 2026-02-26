// ===== UNIQUEMENT EVENTLISTENER =====
import { afficherTirageLoto } from './afficherLoto.js';
import {valeursJoueur} from './valeursJoueur.js';
import { messageLoto } from './messageLoto.js';
import {reinitialiserTirage} from './resetLoto.js';

document.getElementById('joue').addEventListener('click', () => {
    let joueur = valeursJoueur();
    let {chiffres, etoile} = joueur;
    let messageP = document.querySelector('.messageLoto'); 

        // Vérifier qu’il n’y a pas de doublons parmi les 5 chiffres
        const uniqueChiffres = new Set(chiffres);
        if (uniqueChiffres.size !== chiffres.length) {
            messageP.textContent = "Erreur: la grille est vide ou vous avez mis 2 fois le même nombre !";
            messageP.style.opacity = '1';
            return;
        }

          if (chiffres.some(n => n > 49)) {
            messageP.textContent = "Erreur : Les chiffres ne peuvent pas dépasser 49 !";
            messageP.style.opacity = '1';
            return null;
        }

        if (etoile > 9) {
            messageP.textContent = "Erreur : L'étoile ne peut pas dépasser 9 !";
            messageP.style.opacity = '1';
            return null;
        }

    
    let tirage = afficherTirageLoto();
    messageLoto(joueur, tirage);  
});




// ===== REINITIALISER =====
document.getElementById('rejouer').addEventListener('click', reinitialiserTirage);






