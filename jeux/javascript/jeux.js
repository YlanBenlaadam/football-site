// ===================== TABLEAU DES JEUX =====================
// Chaque objet contient les infos d'un jeu
// Ce tableau est utilisé par jeux.html (grille) ET play.html (iframe + infos)

// URL de référence pour GameDistribution (ton domaine enregistré)
const referrer = "?gd_sdk_referrer_url=https://ylanbenlaadam.github.io/football-site/jeux/jeux.html";

const jeux = [
    {
        nom: "Football Dual",
        image: "images/football-dual.jpg",
        iframe: "https://html5.gamedistribution.com/3c96c6a76dc94cedbe3d4bc519e0a7ce/" + referrer,
        description: "Un jeu passionnant de type baby-foot, auquel vous pouvez jouer seul ou avec des amis sur le même appareil ou en réseau.",
        instructions: "Utilisez la souris de votre ordinateur ou appuyez avec votre doigt sur votre appareil mobile pour contrôler les personnages sur le terrain.",
        compatible: "iOS - Android"
    },
    {
        nom: "Super Football Fever",
        image: "images/super-football-fever.jpg",
        iframe: "https://html5.gamedistribution.com/9101fea0805544d3aa15f794af37622b/" + referrer,
        description: "Une expérience de football d'un réalisme sans précédent grâce à des animations fluides et des graphismes 3D plus vrais que nature.",
        instructions: "Utilisez le joystick virtuel pour contrôler les déplacements et les dribbles. Appuyez sur les boutons pour les passes et les tirs.",
        compatible: "iOS - Android"
    },
    {
        nom: "Football Duel",
        image: "images/football-duel.jpg",
        iframe: "https://html5.gamedistribution.com/4a9c7ad53f7c48678b3b848390a62daa/" + referrer,
        description: "Entrez dans l'arène de Football Duel ! Tour à tour tireur et gardien de but dans ce duel de tirs au but palpitant en 3D.",
        instructions: "Balayez l'écran pour viser et tirer. En défense, balayez dans la direction de la balle pour bloquer le tir.",
        compatible: "iOS - Android"
    },
    {
        nom: "Head Soccer Arena",
        image: "images/head-soccer-arena.jpg",
        iframe: "https://html5.gamedistribution.com/4c6790dc7ba5480ba7c1b619bdefdd3f/" + referrer,
        description: "Jouez des matchs à 2 joueurs, enchaînez les parties rapides ou gravissez les échelons des 15 ligues en mode Carrière.",
        instructions: "1 joueur : Z/Q/D ou flèches pour se déplacer, espace pour tirer. 2 joueurs : Joueur gauche Z/Q/S/D + F, Joueur droit flèches + K.",
        compatible: "iOS - Android"
    },
    {
        nom: "Gloves of Block",
        image: "images/gloves-of-block.jpg",
        iframe: "https://html5.gamedistribution.com/0b19cd47f87e4705a0e09b7eca9a5e90/" + referrer,
        description: "Enfilez les gants du gardien de but de votre équipe nationale et menez votre nation à la gloire en Coupe du Monde !",
        instructions: "Utilisez votre souris ou votre écran tactile pour déplacer les gants du gardien et intercepter le ballon.",
        compatible: "iOS - Android"
    },
    {
        nom: "Authentic Football",
        image: "images/authentique-football.jpg",
        iframe: "https://html5.gamedistribution.com/3e23038b06ea4d39b882713fe059e595/" + referrer,
        description: "La technologie de modélisation 3D est utilisée pour construire un terrain de football plus vrai que nature avec des animations fluides.",
        instructions: "PC : W passe longue, S passe courte, D tir, Q changer de joueur. Mobile : joystick.",
        compatible: "iOS - Android"
    },
    {
        nom: "Goal Rush",
        image: "images/goal-rush.jpg",
        iframe: "https://html5.gamedistribution.com/ed673e7229114623a084e6bbdd2d008c/" + referrer,
        description: "Un jeu de football néon ultra-rapide où précision et réflexes fulgurants sont la clé de la victoire !",
        instructions: "Utilisez les touches WASD/ZQSD ou les flèches directionnelles pour jouer.",
        compatible: "iOS - Android"
    },
    {
        nom: "Doodle Football",
        image: "images/doddle-football.jpg",
        iframe: "https://html5.gamedistribution.com/2babe9f2198b4ac38944b8f4c81fff7c/" + referrer,
        description: "Un jeu 2D occasionnel et captivant : guidez le ballon jusqu'au but en relevant des défis dans des environnements variés.",
        instructions: "Cliquez avec le bouton gauche pour tracer une ligne. R pour redémarrer. Barre d'espace pour démarrer.",
        compatible: "iOS - Android"
    },
    {
        nom: "Football Fun",
        image: "images/football-fun.jpg",
        iframe: "https://html5.gamedistribution.com/b59e09ac797a4ccf9ddac5ac0c87a91c/" + referrer,
        description: "Affrontez vos adversaires en équipe de 3. Marquez des buts et repoussez les attaques. Devenez le meilleur joueur !",
        instructions: "PC : WASD pour se déplacer, V passe, N tir, B changer de joueur, M vitesse. Mobile : joystick + boutons.",
        compatible: "iOS - Android"
    },
    {
        nom: "Football Penalty",
        image: "images/football-penalty.jpg",
        iframe: "https://html5.gamedistribution.com/14b5bd0218824dd3965eed3b186d936f/" + referrer,
        description: "Lancez-vous dans un défi de tirs au but palpitant et sans fin ! Marquez des points et progressez à travers les niveaux.",
        instructions: "Envoyez le ballon sur des cibles tout en évitant les obstacles comme les cônes et les caisses.",
        compatible: "iOS - Android"
    },
    {
        nom: "Soccer Dash",
        image: "images/soccer-dash.jpg",
        iframe: "https://html5.gamedistribution.com/5772350f4ea345959c4e56a24d94ee42/" + referrer,
        description: "Faites glisser un ballon entre les obstacles et les joueurs pour marquer un but. Le jeu passe au ralenti pendant le tir.",
        instructions: "Faites glisser le ballon pour choisir la direction du tir et relâchez pour frapper.",
        compatible: "Android"
    },
    {
        nom: "Minitoss",
        image: "images/mini-toss.jpg",
        iframe: "https://html5.gamedistribution.com/998043a8cbae4038a26a9428982b82ca/" + referrer,
        description: "Marque des buts, protège tes cages et bats tous tes adversaires. Deviens le roi du terrain !",
        instructions: "Croix directionnelle et barre d'espace.",
        compatible: "iOS - Android"
    },
    {
        nom: "Real Freekick 3D",
        image: "images/Real-FreeKick-3D.jpg",
        iframe: "https://html5.gamedistribution.com/527ae66f4e664fdc8847e7ce952165dc/" + referrer,
        description: "Un jeu de tirs au but où le sort du championnat se joue lors de séances haletantes. Jouez attaquant et gardien !",
        instructions: "Incarnez le tireur pour marquer ou le gardien pour arrêter. Visez et tirez !",
        compatible: "iOS - Android"
    },
    {
        nom: "Soccer Merge",
        image: "images/soccer-merge.jpg",
        iframe: "https://html5.gamedistribution.com/669b650069914123b72bbeef5a95e2d3/" + referrer,
        description: "Gagnez de l'argent en remportant des compétitions, attirez les meilleurs joueurs et créez votre équipe de football idéale.",
        instructions: "PC : souris. Mobile : tactile.",
        compatible: "iOS - Android"
    },
    {
        nom: "Apex Football Battle",
        image: "images/apex-football-battle.jpg",
        iframe: "https://html5.gamedistribution.com/154c5754a5264da2bcd50a72e95df2c0/" + referrer,
        description: "La passion du football prend vie grâce à l'expérience de simulation la plus réaliste et immersive jamais créée.",
        instructions: "Flèches/WASD pour se déplacer, Espace tir, K centrer, N passe, M passe en profondeur, J changer de joueur.",
        compatible: "iOS - Android"
    },
    {
        nom: "Crazy Kick!",
        image: "images/crazy-kick.jpeg",
        iframe: "https://html5.gamedistribution.com/408abda71dfb4d53a950747bc270e34e/" + referrer,
        description: "Montrez vos plus beaux gestes dans ce jeu de foot ultra-dynamique où le but est garanti !",
        instructions: "Visez en maintenant le bouton gauche de la souris enfoncé. Relâchez pour tirer.",
        compatible: "iOS - Android"
    }
];

// ===================== GÉNÉRATION DE LA GRILLE (uniquement sur jeux.html) =====================

// On récupère la div qui contiendra les cartes
// Si elle n'existe pas (= on est sur play.html), le code s'arrête grâce au if
const gamesGrid = document.getElementById("games-grid");

if (gamesGrid) {
    // forEach parcourt chaque jeu du tableau
    // "index" = la position du jeu dans le tableau (0, 1, 2...)
    jeux.forEach(function (jeu, index) {

        // On crée un lien <a> qui sera la carte cliquable
        const card = document.createElement("a");

        // href → redirige vers play.html avec l'index du jeu en paramètre URL
        // Ex : play.html?jeu=0 pour le premier jeu, play.html?jeu=1 pour le deuxième...
        card.href = "play.html?jeu=" + index;
        card.classList.add("game-card");

        // On crée l'image miniature du jeu
        const img = document.createElement("img");
        img.src = jeu.image;
        img.alt = jeu.nom;

        // On crée le titre sous l'image
        const name = document.createElement("p");
        name.textContent = jeu.nom;
        name.classList.add("game-card-name");

        // On assemble : image + nom dans la carte
        card.appendChild(img);
        card.appendChild(name);

        // On ajoute la carte dans la grille
        gamesGrid.appendChild(card);
    });
}
