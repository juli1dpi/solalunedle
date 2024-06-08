// Fonction pour récupérer les données du fichier JSON
function fetchChansonData() {
    fetch('chanson.json') // Récupère le fichier JSON
        .then(response => response.json()) // Convertit la réponse en JSON
        .then(data => {
            // Récupère les données de la chanson 1
            const chanson1 = data.chansons.chanson1;
            const coverUrl = data.chansons.cover;
            const paroleUrl = data.chansons.parole;

            // Met à jour l'élément HTML avec l'URL de la cover
            document.querySelector('img').src = coverUrl;
            // Met à jour l'élément HTML avec l'URL des paroles
            document.querySelector('img').alt = chanson1 + " - Paroles";
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données : ', error);
        });
}

// Appel de la fonction pour récupérer les données au chargement de la page
window.onload = fetchChansonData;
