function pointDeRelais(){
  let lieuxDeRetrait = prompt("Indiquer le secteur de votre point de retrait?\n Tappez 1 pour la Lauzelle et/ou La Barraque ,\n Tappez 2 pour le Quartier du Biéreau,\n Tappez 3 pour le Quartier des Bruyères,\n Tappez 4 pour L'Hocaille ou\n Tappez 5 pour le centre de LLN.")
  if (lieuxDeRetrait == ""||  isNaN(lieuxDeRetrait)||  lieuxDeRetrait > 5 || lieuxDeRetrait <= 0){
    console.log( "Veuillez saisir une nombre entre 1 et 5 !")
  } 
  else if (lieuxDeRetrait == 1){
    console.log("Veuillez aller cherché votre colis à la pompe à essence Total de Louvain-la-neuve , à l'adresse 'Bld de Wallonie 1, 1348 Ottignies-Louvain-la-Neuve'.")
  }
  else if (lieuxDeRetrait == 2){
    console.log("Veuillez aller cherché votre colis à la supérette La Marjoraine , à l'adresse 'Scavée du Biéreau 22, 1348 Ottignies-Louvain-la-Neuve'. ")
  }
  else if (lieuxDeRetrait == 3){
    console.log("Veuillez aller cherché votre colis au supermarché Pres de chez soi à l'adresse 'Pl. de l'Equerre 35, 1348 Ottignies-Louvain-la-Neuve'. ")
  }
  else if (lieuxDeRetrait == 4){
    console.log("Veuillez aller cherché votre colis à la Pharmacie du Blocry à l'adresse 'Rpe du Val 53, 1348 Ottignies-Louvain-la-Neuve'.")
  }
  else  {
    console.log("Veuillez aller cherché votre colis dans l'esplanade dans la librairie.")
  }
}
function heureDeRetrait(){
    var d = new Date();
    var hours = d.getHours() 
    var minutes = d.getMinutes();
    let heureOuverture = 10 ; 
    let heureFermeture = 20 ;
    let message ; 
    let heure = hours + ":" + minutes 
    if (heureOuverture <= hours && heureFermeture > hours){
        message = " Vous pouvez venir chercher votre colis actuellement. ";
    }
    else if (heureOuverture > hours || heureFermeture <= hours){
        message = " Vous ne pouvez pas venir chercher votre colis. "
    }
    console.log("L'heure d'ouverture est de " + heureOuverture + " et " + "l'heure de fermeture est de " + heureFermeture + "." + " il est " + heure + " ." + message + ".");
}
function prixColis(){

    const tva = 0.21;
    const prixBase = 10;
    let prix;
    let resultat;
    
    function verifDonnees(donnees){
        
        let valeur;
        
        if (donnees == "largeur"){
            valeur = largeur;
        }
        else if (donnees == "longueur"){
            valeur = longueur;
        }
        else if (donnees == "hauteur"){
            valeur = hauteur;
        }
        
        if (valeur == ""){
            console.log("Erreur ! Aucune valeur entrée.");
            valeur = prompt("Entrez la " + donnees + " du colis (cm)");
        }
        else if (valeur == null){
            return;
        }
        else {
            valeur = Number(valeur);
            
            if (isNaN(valeur)){
                console.log("Erreur ! Vous n'avez pas entré un nombre");
                valeur = prompt("Entrez la " + donnees + " du colis (cm)");
            }
            else {
                if (donnees == "largeur"){
                largeur = valeur;
                }
                else if (donnees == "longueur"){
                longueur = valeur;
                }
                else if (donnees == "hauteur"){
                hauteur = valeur;
                }
            }
        }
    }
    
    let largeur = prompt("Entrez la largeur du colis (cm)")
    verifDonnees("largeur");
    
    let longueur = prompt("Entrez la longueur du colis (cm)")
    verifDonnees("longueur")
    
    let hauteur = prompt("Entrez la profondeur du colis (cm)")
    verifDonnees("hauteur");
    
    let dimensions = largeur*longueur*hauteur;
    
    if (dimensions < 50000){
        prix = prixBase;
        prix = Math.round(prix + prix * tva);
        console.log("L'envoi du colis vous coûtera " + prix + " euros " );
    }
    else if (dimensions < 500000){
        prix = prixBase * 1.5;
        prix = Math.round(prix + prix * tva);
        console.log("L'envoi du colis vous coûtera " + prix + " euros" )
    }
    else {
        console.log("Votre colis est trop grand, veuillez vous rendre au point relais le proche pour une estimation")
    }
}
