const quote = "Exemple de parole de So La Lune"; // Change this to the actual quote
const correctAnswer = "Nom de la chanson"; // Change this to the correct song name
let attempts = 0;

function checkGuess() {
    const guess = document.getElementById('guess').value;
    const hints = document.getElementById('hints');
    const attemptsDiv = document.getElementById('attempts');
    attempts++;
    
    if (guess.toLowerCase() === correctAnswer.toLowerCase()) {
        hints.innerHTML = "<p>Bravo! Tu as trouvé la chanson.</p>";
    } else {
        hints.innerHTML += `<p>Indice ${attempts}: ${getHint(attempts)}</p>`;
        attemptsDiv.innerHTML += `<p>Essai ${attempts}: ${guess}</p>`;
    }
}

function getHint(attempt) {
    // Ajouter ici des indices en fonction du nombre d'essais
    if (attempt === 1) return "Ce n'est pas un featuring.";
    if (attempt === 2) return "Cover de l'album : <img src='cover_url.jpg' alt='Album Cover' width='100'>";
    if (attempt === 3) return "Écoute les paroles : <audio controls><source src='paroles.mp3' type='audio/mpeg'></audio>";
    return "Pas d'autres indices disponibles.";
}
