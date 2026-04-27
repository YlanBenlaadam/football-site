// ===================== ANIMATIONS PARTAGÉES =====================
// Ce fichier est utilisé par les pages jeux, play, contact et bug
// Il contient : particules flottantes + fade-in au scroll

// ===================== PARTICULES FLOTTANTES =====================

var particlesContainer = document.getElementById("particles");

if (particlesContainer) {
    var nombreParticules = 20;

    function creerParticule() {
        var particule = document.createElement("div");
        particule.classList.add("particle");

        var taille = Math.random() * 20 + 5;
        var positionX = Math.random() * 100;
        var duree = Math.random() * 12 + 8;
        var delai = Math.random() * 10;

        particule.style.width = taille + "px";
        particule.style.height = taille + "px";
        particule.style.left = positionX + "%";
        particule.style.animationDuration = duree + "s";
        particule.style.animationDelay = delai + "s";

        particlesContainer.appendChild(particule);
    }

    for (var i = 0; i < nombreParticules; i++) {
        creerParticule();
    }
}

// ===================== FADE-IN AU SCROLL =====================

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

var fadeElements = document.querySelectorAll(".fade-in");

fadeElements.forEach(function (element) {
    observer.observe(element);
});
