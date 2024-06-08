// Charger les données JSON depuis le fichier chanson.json
fetch('chanson.json')
  .then(response => response.json())
  .then(data => {
    // Récupérer l'URL de l'image des paroles de la chanson 1
    const lyricsImageUrl = data.chansons.chanson1.parole;

    // Sélectionner la balise img des paroles
    const lyricsImage = document.getElementById('lyricsImage');

    // Assigner l'URL à la balise img des paroles
    lyricsImage.src = lyricsImageUrl;
  });
