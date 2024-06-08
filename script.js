// Charger les données JSON depuis le fichier chanson.json
fetch('chanson.json')
  .then(response => response.json())
  .then(data => {
    // Récupérer l'URL de l'image des paroles de la chanson1
    const lyricsImageUrl = data.chansons.chanson1.parole;

    // Sélectionner la balise img
    const lyricsImage = document.getElementById('lyricsImage');

    // Assigner l'URL de l'image des paroles à la balise img
    lyricsImage.src = lyricsImageUrl;
  });
