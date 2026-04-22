



const dailyQuizess = [
    {
        titre : "Quiz joueur ",
        description : "Devine le joueur a partir de sa carriere (facile)",
        categorie: "Joueur",
        emoji: "⚽",
        niveau: "Facile",
        info: "Quiz du jour ⭐",
        lien : "./joueur.html?niveau=facile"
    },
     {
        titre : "Quiz joueur ",
        description : "Devine le joueur a partir de sa carriere",
        categorie: "Joueur",
        emoji: "⚽",
        niveau: "Moyen",
        info: "Challenge toi  🫵",
        lien : "./joueur.html?niveau=moyen"
        
    },
     {
        titre : "Quiz joueur ",
        description : "Devine le joueur a partir de sa carriere",
        categorie: "Joueur",
        emoji: "⚽",
        niveau: "Difficile",
        info: "Niveau expert 🔥",
        lien : "./joueur.html?niveau=difficile"
    },

     {
        titre: "Quiz Ballon d'Or",
        description: "Teste tes connaissances sur le Ballon d'Or ",
        categorie: "Ballon d'or",
        emoji: "🏅",
        niveau: "Facile",
        info: "Les légendes du football 🏆",
        lien: "./ballon-dor.html?niveau=facile"
    },
      {
        titre: "Quiz Ballon d'Or",
        description: "Teste tes connaissances sur le Ballon d'Or",
        categorie: "Ballon d'or",
        emoji: "🏅",
        niveau: "Moyen",
        info: "L'histoire du ballon d'or 📜",
        lien: "./ballon-dor.html?niveau=moyen"
    },
    {
        titre: "Quiz Ballon d'Or",
        description: "Teste tes connaissances sur le Ballon d'Or (difficile)",
        categorie: "Ballon d'or",
        emoji : "🏅",
        niveau: "Difficile",
        info:" Pour les vrais connaisseurs Pour les vrais connaisseurs du ballon rond 🧠",
        lien: "./ballon-dor.html?niveau=difficile"
    },
    {
        titre: "Quiz Clubs",
        description: "Devine le club grâce aux indices",
        categorie: "Clubs",
        emoji: "🏟️",
        niveau: "Facile",
        info: "Clubs mythiques ⚽",
        lien: "./club.html?niveau=facile"
    },
     {
        titre: "Quiz Clubs",
        description: "Devine le club grâce aux indices",
        categorie: "Clubs",
        emoji: "🏟️",
        niveau: "Moyen",
        info: "Réussira tu a trouver ses clubs ? 🏟️",
        lien: "./club.html?niveau=moyen"
    },
     {
        titre: "Quiz Clubs",
        description: "Devine le club grâce aux indices ",
        categorie: "Clubs",
        emoji: "🏟️",
        niveau: "Difficile",
        info:"Tente d'obtenir 5/5, est tu un vrai supporter ?! 🔥 ",
        lien: "./club.html?niveau=difficile"
    }
]

/* ici on va generer un indice aleatoire du tableau selon la date 
   grace au modulo on s'assure que le resultat sera tjrs entre 1 et dailyquizess.length
*/
const index = new Date().getDate() % dailyQuizess.length;

// on recupere la balise a qui sera le contenaire pour l'aaffichage du quizz du jour
const dailyCard = document.getElementsByClassName("daily-card")[0];

// on cree les div pour stocker le niveau la categorie et l'info et les espaces de texte d'affichage
const categorie = document.createElement("div");
const niveau = document.createElement("div");
const info = document.createElement("div");

categorie.classList.add("daily-category");
niveau.classList.add("daily-level");
info.classList.add("daily-info");

// affichage formater pour chaque quizz du jour
categorie.textContent = dailyQuizess[index].emoji + " " + dailyQuizess[index].categorie ;
niveau.textContent = "Niveau : " + dailyQuizess[index].niveau ;
info.textContent = dailyQuizess[index].info ;

// on cree la carte et les enfants 
const title = document.createElement("h3") ;
const desc = document.createElement("p") ;
const playNow = document.createElement("span") ;

title.textContent = dailyQuizess[index].titre ;
desc.textContent = dailyQuizess[index].description ;

// on lie les enfant au parent dans un bonne ordre (daily-card)
dailyCard.appendChild(categorie);
dailyCard.appendChild(title);
dailyCard.appendChild(desc);
dailyCard.appendChild(niveau);
dailyCard.appendChild(info);
dailyCard.appendChild(playNow);


playNow.textContent = "Jouer maintenant 🠒 "
playNow.classList.add("daily-cta");

dailyCard.href = dailyQuizess[index].lien;


/* Affichage des popup en savoir plus */

const modal = document.getElementById("quiz-modal");
const modalOverlay = document.querySelector(".quiz-modal-overlay");
const modalClose = document.getElementById("quiz-modal-close");

const modalTitle = document.getElementById("quiz-modal-title");
const modalText = document.getElementById("quiz-modal-text");
const modalType = document.getElementById("quiz-modal-type");
const modalLevels = document.getElementById("quiz-modal-levels");
const modalFormat = document.getElementById("quiz-modal-format");

const themeButtons = document.querySelectorAll(".theme-more");

const modalData = {
  "ballon-dor": {
    title: "🏅 Quiz Ballon d’Or",
    text: `Teste tes connaissances sur l’histoire du Ballon d’Or.

           Les questions peuvent porter sur plusieurs éléments : retrouver le lauréat d’une année précise, identifier le vainqueur grâce a sa nationalitée et autres.

           Plus le niveau augmente, plus les questions deviennent difficiles et demandent une vraie connaissance  du trophée.`,
    type: "Histoire & palmarès",
    levels: "3 niveaux",
    format: "5 questions"
  },
  "club": {
    title: "🏟️ Quiz Club",
    text: `Devine le club à partir de différents indices liés à son identité et à son histoire.

            Plusieurs thèmes peuvent apparaître dans les questions : le surnom du club, le stade dans lequel il joue, certains joueurs emblématiques ou encore le nombre de Coupes d’Europe remportées.

            Au fil des niveaux, les indices deviennent plus subtils et demandent une meilleure connaissance du football.`,
    type: "Indices de club",
    levels: "3 niveaux",
    format: "5 questions"
  },
  "joueur": {
    title: "⚽ Quiz Joueur",
    text: `Retrouve le joueur à partir des clubs de sa carrière.

           Les premiers niveaux restent accessibles, puis les profils deviennent plus rares et plus difficiles à reconnaître.

           Certains prêts n'ont pas été mis pour ajouter de la difficulté.

           N'hésitez pas à suggérer des ajouts ou des mises à jour sur la page prévue à cet effet, de même si certains transfert ne sont pas a jour ou autres.`,
    type: "Carrière du joueur",
    levels: "3 niveaux",
    format: "5 questions"
  }
};

function openModal(theme) {
  const data = modalData[theme];
  if (!data) return;

  // on remplis les balise HTML en fonction du theme cliquer
  modalTitle.textContent = data.title;
  modalText.textContent = data.text;
  modalType.textContent = data.type;
  modalLevels.textContent = data.levels;
  modalFormat.textContent = data.format;
  // on affiche la popup
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");    // bloque le scroll du body
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open"); // réactive le scroll du body
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme; // lis l'attribut data-theme de la balise HTML = le theme 
    openModal(theme);
  });
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

// si la touche echap est presser sa quitte 
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});