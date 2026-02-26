// ===== AFFICHER TIRAGE LOTO =====
import { tirageLoto } from "./tirageLoto.js";

export function afficherTirageLoto() {
    let tirage = tirageLoto();

    // Afficher les chiffres
    for (let i = 1; i <= 5; i++) {
        let boule = document.getElementById('boule' + i);
        boule.textContent = tirage.tirageNombres[i - 1];
    }

    // Tirage au sort de l'étoile
    document.getElementById('etoile').textContent = tirage.etoile;

    
    // Cacher h1 et afficher résultat du tirage
    document.querySelector("h1").style.opacity = "0";
    document.querySelector(".resultatTirage").style.opacity = "1";

    // Afficher message
    document.querySelector(".messageLoto").style.opacity = "1";

    // Activer bouton Rejouer
    document.getElementById('rejouer').disabled = false;

    // Désactiver bouton Joue
    document.getElementById('joue').disabled = true;

    return tirage; 
}
