// ===================== FADE-IN AU SCROLL =====================

// 1. On crée la fonction qui sera appelée quand un élément entre dans l'écran
// Le navigateur lui passe automatiquement "entries" = la liste des éléments qui ont changé
function quandElementVisible(entries) {

    // On parcourt chaque élément qui a changé d'état
    entries.forEach(function (entry) {

        // Est-ce que cet élément est visible à l'écran ?
        if (entry.isIntersecting) {

            // OUI → on lui ajoute la classe "visible" (le CSS fait l'animation)
            entry.target.classList.add("visible");

            // On arrête de surveiller cet élément (animation jouée une seule fois)
            observer.unobserve(entry.target);
        }
    });
}

// 2. On crée les options de configuration
var options = {
    threshold: 0.1    // déclenche quand 10% de l'élément est visible
};

// 3. On crée l'observateur en lui donnant la fonction + les options
var observer = new IntersectionObserver(quandElementVisible, options);

// 4. On récupère tous les éléments qui ont la classe "fade-in"
var fadeElements = document.querySelectorAll(".fade-in");

// 5. Pour chaque élément, on dit à l'observateur de le surveiller
fadeElements.forEach(function (element) {
    // observe() = "hé vigile, surveille cet élément et préviens-moi quand il est visible"
    observer.observe(element);
});

// ===================== EFFET TYPING =====================

// Le texte complet qu'on veut "taper"
var texteComplet = "Prêt pour le coup d'envoi ?";

// L'élément HTML où on va écrire le texte lettre par lettre
var typingElement = document.getElementById("typing-text");

// Compteur : quelle lettre on en est (commence à 0 = première lettre)
var index = 0;

// Vitesse de frappe en millisecondes (80ms entre chaque lettre)
var vitesseFrappe = 80;

// La fonction qui ajoute une lettre à chaque appel
function taperLettre() {

    // Si on n'a pas encore tapé toutes les lettres...
    if (index < texteComplet.length) {

        // On ajoute la lettre à la position "index" dans l'élément HTML
        // textContent += → ajoute à la suite du texte existant
        // charAt(index) → retourne le caractère à la position "index"
        typingElement.textContent += texteComplet.charAt(index);

        // On passe à la lettre suivante
        index++;

        // On rappelle cette même fonction dans 80ms (effet de délai entre chaque lettre)
        // setTimeout(fonction, délai) → exécute la fonction après X millisecondes
        setTimeout(taperLettre, vitesseFrappe);
    } else {
        // Toutes les lettres sont tapées → on enlève le curseur clignotant
        typingElement.classList.add("done");
    }
}

// On lance le typing 500ms après le chargement de la page (petit délai pour que le fade-in se fasse d'abord)
setTimeout(taperLettre, 500);


// ===================== TEXTE ROTATIF HERO =====================

// Tableau des phrases qui vont défiler une par une
var phrases = [
    "⚽ 9 quiz disponibles",
    "🎮 15 jeux en ligne",
    "🏆 3 thèmes de quiz",
    "🔥 Nouveau : Espace Arcade",
    "📱 Jouable sur mobile"
];

// L'élément HTML qui affiche le texte rotatif
var rotatingElement = document.getElementById("rotating-text");

// Index de la phrase actuelle (commence à 0 = première phrase)
var phraseIndex = 0;

// Fonction qui change le texte avec un effet de fondu
function changerPhrase() {

    // 1. On cache le texte actuel (le CSS fait un fondu sortant)
    rotatingElement.classList.add("hide");

    // 2. Après 400ms (le temps que le fondu sortant se termine)...
    setTimeout(function () {

        // On passe à la phrase suivante
        // Le modulo (%) fait que après la dernière phrase, on revient à la première
        // Ex : si phraseIndex = 4 et phrases.length = 5 → (4+1) % 5 = 0 → retour au début
        phraseIndex = (phraseIndex + 1) % phrases.length;

        // On remplace le texte par la nouvelle phrase
        rotatingElement.textContent = phrases[phraseIndex];

        // On enlève "hide" → le CSS fait un fondu entrant (opacity revient à 1)
        rotatingElement.classList.remove("hide");

    }, 400);
}

// setInterval → exécute la fonction toutes les X millisecondes EN BOUCLE
// Ici toutes les 3000ms = 3 secondes, on change de phrase
setInterval(changerPhrase, 3000);

// ===================== HOVER 3D (TILT) SUR LES BANNIÈRES =====================

// On récupère toutes les bannières
var banners = document.querySelectorAll(".banner");

banners.forEach(function (banner) {

    // Quand la souris bouge SUR la bannière
    banner.addEventListener("mousemove", function (e) {

        // getBoundingClientRect() → retourne la position et taille de la bannière sur l'écran
        // { top, left, width, height } → coordonnées du rectangle
        var rect = banner.getBoundingClientRect();

        // Position de la souris DANS la bannière (pas sur l'écran entier)
        // e.clientX = position X de la souris sur l'écran
        // rect.left = position X du bord gauche de la bannière
        // La différence donne la position X de la souris DANS la bannière
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        // On centre les valeurs : au milieu de la bannière = 0, aux bords = -0.5 ou +0.5
        // Diviser par width/height normalise entre 0 et 1, puis -0.5 centre à 0
        var centerX = (x / rect.width) - 0.5;
        var centerY = (y / rect.height) - 0.5;

        // rotateX = inclinaison verticale (haut/bas) → contrôlé par la position Y de la souris
        // rotateY = inclinaison horizontale (gauche/droite) → contrôlé par la position X
        // Le * 10 contrôle l'intensité de l'inclinaison (10 degrés max)
        // Le - sur rotateX inverse la direction pour un mouvement naturel
        var rotateX = -centerY *5;
        var rotateY = centerX * 5;

        // On applique la rotation 3D + un léger zoom (scale 1.02 = 102%)
        banner.style.transform = "perspective(1000px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale3d(1.01, 1.01, 1.01)";
    });

    // Quand la souris QUITTE la bannière → on remet à plat
    banner.addEventListener("mouseleave", function () {
        banner.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
});

// ===================== PARTICULES FLOTTANTES =====================

// Le conteneur où on va ajouter les particules
var particlesContainer = document.getElementById("particles");

// Nombre de particules à créer
var nombreParticules = 20;

// Fonction qui crée UNE particule avec des propriétés aléatoires
function creerParticule() {

    // On crée un élément <div> qui sera notre particule (cercle)
    var particule = document.createElement("div");

    // On lui donne la classe "particle" pour le style CSS
    particule.classList.add("particle");

    // Math.random() → retourne un nombre aléatoire entre 0 et 1
    // Ex : Math.random() = 0.73 → taille = 0.73 * 20 + 5 = 19.6px

    // Taille aléatoire entre 5px et 25px
    var taille = Math.random() * 20 + 5;

    // Position horizontale aléatoire entre 0% et 100% de la largeur
    var positionX = Math.random() * 100;

    // Durée de l'animation entre 8s et 20s (plus c'est long, plus c'est lent)
    var duree = Math.random() * 12 + 8;

    // Délai avant de commencer entre 0s et 10s (chaque particule démarre à un moment différent)
    var delai = Math.random() * 10;

    // On applique les styles directement sur l'élément via JS
    // .style.propriété = valeur → équivalent de mettre du CSS inline
    particule.style.width = taille + "px";
    particule.style.height = taille + "px";

    // left en % → position horizontale aléatoire
    particule.style.left = positionX + "%";

    // animationDuration → combien de temps dure un cycle de l'animation
    particule.style.animationDuration = duree + "s";

    // animationDelay → quand l'animation commence (décalage)
    particule.style.animationDelay = delai + "s";

    // On ajoute la particule dans le conteneur
    particlesContainer.appendChild(particule);
}

// Boucle qui crée toutes les particules
// i commence à 0 et monte jusqu'à nombreParticules (20)
for (var i = 0; i < nombreParticules; i++) {
    creerParticule();
}