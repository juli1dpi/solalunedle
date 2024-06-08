// URL du fichier JSON
var url = 'solalunedle-default-rtdb-export.json';

// Requête HTTP pour récupérer le fichier JSON
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Analyser les données JSON
    // Par exemple, accéder à la chanson1 et à sa couverture
    var chanson1 = data.chansons.chanson1;
    var coverChanson1 = data.chansons.cover;

    // Utiliser les données dans votre site web
    console.log("Chanson 1:", chanson1);
    console.log("URL de la couverture de la chanson 1:", coverChanson1);

    // Vous pouvez maintenant utiliser ces données pour afficher du contenu dans votre site web
    // Par exemple, injecter ces données dans le DOM pour les afficher sur la page
  })
  .catch(error => {
    console.error('Erreur lors du chargement du fichier JSON:', error);
  });
