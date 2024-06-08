document.addEventListener("DOMContentLoaded", function() {
    fetch('chansons.json')
        .then(response => response.json())
        .then(data => {
            const chansons = data.chansons;
            const chansonContainer = document.getElementById('chanson-container');

            for (const key in chansons) {
                if (Object.hasOwnProperty.call(chansons, key)) {
                    const chanson = chansons[key];
                    const chansonDiv = document.createElement('div');
                    chansonDiv.classList.add('chanson');
                    chansonDiv.innerHTML = `
                        <img src="${chanson.cover}" alt="${key}">
                        <p>${chanson.parole}</p>
                        <input type="text" data-chanson="${key}" placeholder="Devinez la chanson">
                    `;
                    chansonContainer.appendChild(chansonDiv);
                }
            }
        });
});
