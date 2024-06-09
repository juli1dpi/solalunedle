// Charger les données JSON depuis le fichier chanson.json
fetch('chanson.json')
  .then(response => response.json())
  .then(data => {
    // Récupérer les paroles de la première chanson
    const paroleChanson1 = data.chansons.chanson1.parole;

    // Sélectionner l'élément où afficher les paroles
    const lyricsDiv = document.getElementById('lyrics');

    // Assigner les paroles à l'élément
    lyricsDiv.innerText = paroleChanson1;
  });
