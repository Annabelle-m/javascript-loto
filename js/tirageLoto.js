// ===== TIRAGE LOTO =====
export function tirageLoto() {
    let tirageNombres = [];
    
    // Tirage au sort des chiffres
    while (tirageNombres.length < 5) {
        let nb = Math.floor(Math.random() * 50) ; // De 0 à 49
            if (!tirageNombres.includes(nb)) { // Evite les doublons
                tirageNombres.push(nb);
            }
    }
    
    let etoile = Math.floor(Math.random() * 10);

    return { tirageNombres, etoile };   
}

