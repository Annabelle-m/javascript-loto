// ===== REINITIALISER =====
export function reinitialiserTirage() {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('chiffre' + i).value = '';
        document.getElementById('boule' + i).textContent = '00';
    }

    document.getElementById('chiffre6').value = '';
    document.getElementById('etoile').textContent = '01';

    // Réafficher le h1 et cacher le tirage
    document.querySelector("h1").style.opacity = "1";
    document.querySelector(".resultatTirage").style.opacity = "0";

    // Désactiver à nouveau "Rejouer"
    document.getElementById('rejouer').disabled = true;

    // Activer à nouveau "Rejouer"
    document.getElementById('joue').disabled = false;

    // Cacher message
    document.querySelector(".messageLoto").style.opacity = "0";
}
