// ===================== POPUP "EN SAVOIR PLUS" =====================

const modal = document.getElementById("index-modal");
const modalOverlay = document.querySelector(".index-modal-overlay");
const modalClose = document.getElementById("index-modal-close");
const modalTitle = document.getElementById("index-modal-title");// sera remplis avec la bonne valeur du tableau
const modalText = document.getElementById("index-modal-text");

// Ici on récupère tous les <p> qui ont la classe "banner-more" (les "En savoir plus")
const moreButtons = document.querySelectorAll(".banner-more");

// Objet qui contient les données de chaque popup
// La clé (ex: "quiz") correspond au data-popup="quiz" dans le HTML
// Le JS lit cette clé avec element.dataset.popup
const popupData = {
  "quiz": {
    title: "🏆 Nos Quiz Football",
    text: `Teste tes connaissances avec nos quiz 100% football !

3 thèmes disponibles :
• Ballon d'Or — Retrouve le lauréat grâce aux indices
• Clubs — Devine le club à partir de son histoire
• Joueurs — Identifie le joueur par sa carrière

Chaque quiz propose 3 niveaux de difficulté (Facile, Moyen, Difficile) et 5 questions par partie.

Bonne chance !`
  },
  "jeux": {
    title: "🎮 Espace Arcade",
    text: `Joue directement en ligne à des mini-jeux sur le thème du football !

Des jeux fun et gratuits, accessibles sans inscription.

Cette section est en cours de construction, de nouveaux jeux arrivent bientôt !`
  }
};

// Le paramètre "type" = la clé dans popupData ("quiz" ou "jeux")
function openModal(type) {
  
  const data = popupData[type];//en fonction du parametre on prend la bonne clee dns popupData (type = cléé )

  // Si la clé n'existe pas dans popupData, on ne fait rien
  if (!data) return;

  // On remplit le titre et le texte de la popup avec les données du tableau associer au type
  modalTitle.textContent = data.title;
  modalText.textContent = data.text;

  // On enlève la classe "hidden" pour afficher la popup
  modal.classList.remove("hidden");
}

// Fonction pour fermer la popup
function closeModal() {
  // On remet la classe "hidden" → la popup redevient invisible (display: none)
  modal.classList.add("hidden");
}

// ici on parcours tout les en savoir plus 
moreButtons.forEach(function (button) {
  // addEventListener("click", ...) → quand on clique sur un en savoir plus, exécute la fonction
  button.addEventListener("click", function () {
    // dataset.popup → lit la valeur de l'attribut data-popup="..." dans le HTML
    // qui contient le type du btn cliquer quizz ou jeux et ce type on le met en parametre pr ouvrir le bon popup
    const type = button.dataset.popup;
    openModal(type);
  });
});

// Fermer la popup quand on clique sur le bouton ✕
modalClose.addEventListener("click", closeModal);

// Fermer la popup quand on clique sur l'overlay (le fond sombre)
modalOverlay.addEventListener("click", closeModal);

// Fermer la popup quand on appuie sur la touche Échap
// event.key → retourne le nom de la touche pressée
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
