// ===== RECUPERER LES VALEURS JOUEURS =====
export function valeursJoueur() {
  let chiffre1 = Number(document.getElementById("chiffre1").value);
  let chiffre2 = Number(document.getElementById("chiffre2").value);
  let chiffre3 = Number(document.getElementById("chiffre3").value);
  let chiffre4 = Number(document.getElementById("chiffre4").value);
  let chiffre5 = Number(document.getElementById("chiffre5").value);
  let etoile   = Number(document.getElementById("chiffre6").value);

  let chiffres = [chiffre1, chiffre2, chiffre3, chiffre4, chiffre5];

  return {chiffres, etoile};
}



