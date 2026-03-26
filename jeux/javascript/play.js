// ===================== PAGE DE JEU (play.html) =====================

// URLSearchParams lit les paramètres dans l'URL
// Ex : play.html?jeu=3 → params.get("jeu") retourne "3" (en string)
const params = new URLSearchParams(window.location.search);

// parseInt convertit le string "3" en nombre 3
const index = parseInt(params.get("jeu"));

// On vérifie que l'index est valide (est un nombre ET existe dans le tableau)
// isNaN = "is Not a Number" → vérifie si la conversion a échoué (donc que on as autre chose qu'un int )
if (isNaN(index) || index < 0 || index >= jeux.length) {
    // Si l'index est invalide, on redirige vers la page catalogue
    window.location.href = "jeux.html";
} else {
    // On récupère le bon jeu dans le tableau
    const jeu = jeux[index];

    // On remplit l'iframe avec l'URL du jeu
    document.getElementById("game-frame").src = jeu.iframe;

    // On remplit les infos du jeu
    document.getElementById("game-title").textContent = jeu.nom;
    document.getElementById("game-description").textContent = jeu.description;
    document.getElementById("game-controls").textContent = jeu.instructions;
    document.getElementById("game-compatible").textContent = "Compatible : " + jeu.compatible;

    // On met à jour le titre de l'onglet du navigateur
    document.title = "FootAddict - " + jeu.nom;
}

const fullScreenBtn = document.getElementById("fullscreen-btn") ;
const gameFrameContainer = document.getElementById("game-frame-container");

fullScreenBtn.addEventListener('click',() =>{
    // 1. Est-ce que le navigateur connaît requestFullscreen ?
    if (gameFrameContainer.requestFullscreen) {
        // 2. OUI → on l'appelle pour lancer le plein écran
        gameFrameContainer.requestFullscreen();
    } 
    // 3. Sinon, est-ce que c'est Safari (qui utilise un autre nom) ?
    else if (gameFrameContainer.webkitRequestFullscreen) {
        // 4. OUI → on utilise la version Safari
        gameFrameContainer.webkitRequestFullscreen();
    }
}
);
