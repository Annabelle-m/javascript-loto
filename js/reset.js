let compteurOurs = 1; // déjà dans ton code

export function resetOurs() {
    // Réinitialise toutes les images d’ours
    for (let i = 1; i <= 3; i++) {
        const imgOurs = document.getElementById(`ours${i}`);
        imgOurs.style.opacity = "0";
        imgOurs.style.width = "200px"; // taille par défaut
        imgOurs.style.height = "auto";
        imgOurs.src = "./img/parentOurs.gif"; // remet l’image de base
    }

    // Stoppe et cache l’audio
    const audioOurs = document.getElementById('audioOurs');
    if (audioOurs) {
        audioOurs.pause();
        audioOurs.currentTime = 0;
        audioOurs.style.opacity = "0";
    }

    // Reset du compteur
    compteurOurs = 1;
}
